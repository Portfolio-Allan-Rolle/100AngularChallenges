import { Injectable, signal } from '@angular/core';
import { delay, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  isVisible = signal(false);
  message = signal('');
  isAnimatingSubscription!: Subscription;

  animateSnackBar(message: string) {
    this.isVisible.set(true);
    this.message.set(message);
    this.isAnimatingSubscription = of(null)
      .pipe(delay(2900))
      .subscribe({
        complete: () => {
          this.isVisible.set(false);
          this.message.set('');
          this.isAnimatingSubscription.unsubscribe();
        },
      });
  }
}
