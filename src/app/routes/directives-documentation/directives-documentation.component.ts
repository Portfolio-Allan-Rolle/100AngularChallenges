import { Component } from '@angular/core';
import { DebounceClickDirective } from '../../directives/debounce-click.directive';
import { RippleDirective } from '../../directives/ripple.directive';
import { ScaleDirective } from '../../directives/scale.directive';

@Component({
  selector: 'app-directives-documentation',
  imports: [DebounceClickDirective, RippleDirective, ScaleDirective],
  templateUrl: './directives-documentation.component.html',
  styleUrl: './directives-documentation.component.scss',
})
export class DirectivesDocumentationComponent {
  log() {
    console.log('Hello World');
  }
}
