import { Component, input, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  imports: [FontAwesomeModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  faStar = faStar;
  faStarHalf = faStarHalfStroke;
  reviewNumber = input.required<number>();
  limit = 5;
  randomId = self.crypto.randomUUID();

  starsFilled = computed(() => {
    return Array.from({ length: Math.trunc(this.reviewNumber()) }, () => ({
      id: Math.random(),
      icon: this.faStar,
    }));
  });

  starsFilledHalf = computed(() => {
    if (!Number.isInteger(this.reviewNumber())) {
      const decimals = +(
        this.reviewNumber() - Math.floor(this.reviewNumber())
      ).toFixed(1);
      return Array.from(
        {
          length:
            this.limit -
            (decimals < 0.5 ? this.limit : this.limit - Math.round(decimals)),
        },
        () => ({
          id: Math.random(),
          icon: this.faStarHalf,
        })
      );
    }
    return [];
  });

  starsFilledEmpty = computed(() => {
    if (!Number.isInteger(this.reviewNumber())) {
      return Array.from(
        {
          length: this.limit - Math.round(this.reviewNumber()),
        },
        () => ({
          id: Math.random(),
          icon: this.faStar,
        })
      );
    }
    return Array.from(
      { length: this.limit - Math.trunc(this.reviewNumber()) },
      () => ({
        id: Math.random(),
        icon: this.faStar,
      })
    );
  });
}
