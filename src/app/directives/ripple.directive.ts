import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRipple]',
})
export class RippleDirective {
  constructor(private element: ElementRef) {}
  private rendererService = inject(Renderer2);

  @HostListener('click', ['$event'])
  onClick($event: PointerEvent) {
    this.createRipple($event);
  }

  createRipple(e: PointerEvent) {
    const nativeElement = this.element.nativeElement;
    if (nativeElement.getElementsByClassName('ripple').length > 0) {
      nativeElement.removeChild(nativeElement.childNodes[1]);
    }
    const circle = this.rendererService.createElement('span');
    const d =
      Math.max(nativeElement.clientWidth, nativeElement.clientHeight) / 2;
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    this.rendererService.appendChild(nativeElement, circle);
    circle.style.width = circle.style.height = d + 'px';
    circle.style.left = e.clientX - rect.left - d / 2 + 'px';
    circle.style.top = e.clientY - rect.top - d / 2 + 'px';
    this.rendererService.addClass(circle, 'ripple');
  }
}
