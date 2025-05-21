import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  private rendererService = inject(Renderer2);
  width = input<string>();
  heigth = input<string>();

  ngOnInit(): void {
    const targetElement = this.el.nativeElement;
    this.rendererService.addClass(targetElement, 'pulse');
    this.rendererService.setStyle(targetElement, 'width', this.width());
    this.rendererService.setStyle(targetElement, 'height', this.heigth());
    this.rendererService.setStyle(
      targetElement,
      'background-color',
      'rgb(239, 241, 246)'
    );
  }
}
