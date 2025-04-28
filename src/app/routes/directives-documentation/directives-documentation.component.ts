import { Component } from '@angular/core';
import { DebounceClickDirective } from '../../directives/debounce-click.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-directives-documentation',
  imports: [DebounceClickDirective, RippleDirective],
  templateUrl: './directives-documentation.component.html',
  styleUrl: './directives-documentation.component.scss',
})
export class DirectivesDocumentationComponent {
  log() {
    console.log('Hello World');
  }
}
