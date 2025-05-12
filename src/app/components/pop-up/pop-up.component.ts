import { Component, input, signal } from '@angular/core';
import { fadeInOutAnimation } from '../../animations/animations';
import { delay, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-pop-up',
  animations: [fadeInOutAnimation],
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  message = input();
  isVisible = signal(false);
  isAnimatingSubscription$!: Subscription;
  showPopUp() {
    this.isVisible.set(true);
    this.isAnimatingSubscription$ = of(null)
      .pipe(delay(2000))
      .subscribe({
        complete: () => {
          this.isVisible.set(false);
          this.isAnimatingSubscription$.unsubscribe();
        },
      });
  }
}
