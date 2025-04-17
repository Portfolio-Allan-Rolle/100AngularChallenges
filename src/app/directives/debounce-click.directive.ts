import {
  Directive,
  HostListener,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  clicks$ = new Subject();
  subscription!: Subscription;
  debounceClickFunction = output();

  ngOnInit(): void {
    const debounceTimeInMs = 500;
    this.subscription = this.clicks$
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe(() => this.debounceClickFunction.emit());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any): void {
    this.clicks$.next(event);
  }
}
