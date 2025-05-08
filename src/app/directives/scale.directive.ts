import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]',
})
export class ScaleDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.transition = 'transform .6s ease';
    this.el.nativeElement.style.transform = 'scale(1.5)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
