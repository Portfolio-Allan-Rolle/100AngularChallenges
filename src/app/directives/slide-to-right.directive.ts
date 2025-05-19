import {
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSlideToRight]',
})
export class SlideToRightDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {}

  rendererService = inject(Renderer2);
  nativeElement!: HTMLElement;

  ngOnInit(): void {
    this.nativeElement = this.el.nativeElement;
    this.rendererService.addClass(this.nativeElement, 'slide-in-left');
  }

  ngOnDestroy(): void {
    this.rendererService.removeClass(this.nativeElement, 'slide-in-left');
  }
}
