import { Directive, ElementRef, OnDestroy, OnInit, input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appLazyLoadImage]',
})
export class LazyLoadImageDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {}

  imageURI = input();
  intersectionSubscription!: Subscription;
  observer!: IntersectionObserver;

  createAndObserve() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    };
    this.intersectionSubscription = new Observable<boolean>((subscriber) => {
      const callback = function (entries: any) {
        entries.forEach((entry: any) => subscriber.next(entry.isIntersecting));
      };
      this.observer = new IntersectionObserver(callback, options);
      this.observer.observe(this.el.nativeElement);
    }).subscribe({
      next: (isVisible) => {
        if (isVisible) {
          this.el.nativeElement.src = this.imageURI();
          this.observer.disconnect();
        }
      },
    });
  }

  ngOnInit(): void {
    this.createAndObserve();
  }

  ngOnDestroy(): void {
    this.intersectionSubscription.unsubscribe();
  }
}
