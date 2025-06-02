import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private seconds = 10;
  public timeRemaining!: number;
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = timer(0, 1000)
      .pipe(
        map((n) => (this.seconds - n) * 1),
        takeWhile((n) => n >= 0),
        tap((n) => (this.timeRemaining = n)),
      )
      .subscribe({
        complete: () => this.router.navigate(['/']),
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
