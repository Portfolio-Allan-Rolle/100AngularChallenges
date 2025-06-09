import { Component, signal } from '@angular/core';
import { DebounceClickDirective } from '../../directives/debounce-click.directive';
import { RippleDirective } from '../../directives/ripple.directive';
import { ScaleDirective } from '../../directives/scale.directive';
import { LazyLoadImageDirective } from '../../directives/lazy-load-image.directive';
import { SlideToRightDirective } from '../../directives/slide-to-right.directive';
import { ContainerComponent } from '../../components/container/container.component';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-documentation',
  imports: [
    AutoFocusDirective,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
    LazyLoadImageDirective,
    SlideToRightDirective,
    ContainerComponent,
    CommonModule,
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
