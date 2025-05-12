import { Injectable, signal } from '@angular/core';
import { delay, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  isVisible = signal(false);
  isAnimatingSubscription!: Subscription;

  animateSnackBar() {
    this.isVisible.set(true);
    this.isAnimatingSubscription = of(null)
      .pipe(delay(2900))
      .subscribe({
        complete: () => {
          this.isVisible.set(false);
          this.isAnimatingSubscription.unsubscribe();
        },
      });
  }
}
