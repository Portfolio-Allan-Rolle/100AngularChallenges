import {
  AfterContentInit,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { delay, EMPTY, of, Subscription } from 'rxjs';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterContentInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private sub!: Subscription;

  ngAfterContentInit(): void {
    this.sub = of(EMPTY)
      .pipe(delay(1000))
      .subscribe({
        complete: () => this.el.nativeElement.focus(),
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
