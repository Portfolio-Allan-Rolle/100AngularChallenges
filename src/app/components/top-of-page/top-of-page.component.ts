import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  imports: [],
  templateUrl: './top-of-page.component.html',
  styleUrl: './top-of-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopOfPageComponent {
  public scroller = inject(ViewportScroller);
  distanceFromTopOfPage = input.required<number>();
  isButtonVisible = signal(false);

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    let [_, Yposition] = this.scroller.getScrollPosition();
    Yposition > this.distanceFromTopOfPage()
      ? this.isButtonVisible.set(true)
      : this.isButtonVisible.set(false);
  }

  scrollToTop() {
    this.scroller.scrollToPosition([0, 0]);
  }
}
