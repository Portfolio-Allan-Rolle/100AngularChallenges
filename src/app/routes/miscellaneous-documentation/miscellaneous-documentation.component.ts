import { Component, signal } from '@angular/core';
import { fadeInOutAnimation } from '../../animations/animations';

@Component({
  selector: 'app-miscellaneous-documentation',
  imports: [],
  templateUrl: './miscellaneous-documentation.component.html',
  styleUrl: './miscellaneous-documentation.component.scss',
  animations: [fadeInOutAnimation],
})
export class MiscellaneousDocumentationComponent {
  isElementVisible = signal<boolean>(false);
  onToggle() {
    this.isElementVisible.set(!this.isElementVisible());
  }
}
