import { Component, signal } from '@angular/core';
import { DebounceClickDirective } from '../../directives/debounce-click.directive';
import { RippleDirective } from '../../directives/ripple.directive';
import { ScaleDirective } from '../../directives/scale.directive';
import { LazyLoadImageDirective } from '../../directives/lazy-load-image.directive';
import { SlideToRightDirective } from '../../directives/slide-to-right.directive';

@Component({
  selector: 'app-directives-documentation',
  imports: [
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
    LazyLoadImageDirective,
    SlideToRightDirective,
  ],
  templateUrl: './directives-documentation.component.html',
  styleUrl: './directives-documentation.component.scss',
})
export class DirectivesDocumentationComponent {
  log() {
    console.log('Hello World');
  }
  isHexagonVisible = signal<boolean>(false);
  isCubeVisible = signal<boolean>(false);
}
