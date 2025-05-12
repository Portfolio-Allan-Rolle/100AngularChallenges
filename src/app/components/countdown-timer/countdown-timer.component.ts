import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  time = input.required<string>();
  countDownSubscription!: Subscription;

  days = signal<number>(0);
  hours = signal<number>(0);
  minutes = signal<number>(0);
  seconds = signal<number>(0);

  expired = signal<boolean>(false);

  generateCountDown() {
    const countDownDate = new Date(this.time()).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      this.countDownSubscription.unsubscribe();
      this.expired.set(true);
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.days.set(days);
    this.hours.set(hours);
    this.minutes.set(minutes);
    this.seconds.set(seconds);
  }

  setCountdown() {
    this.countDownSubscription = interval(1000).subscribe({
      next: () => this.generateCountDown(),
    });
  }

  ngOnInit(): void {
    this.setCountdown();
  }

  ngOnDestroy(): void {
    this.countDownSubscription.unsubscribe();
  }
}
