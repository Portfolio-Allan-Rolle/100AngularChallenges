import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-fieldset-toggle',
  imports: [],
  templateUrl: './fieldset-toggle.component.html',
  styleUrl: './fieldset-toggle.component.scss',
})
export class FieldsetToggleComponent {
  fieldsetLegend = input.required<string>();
  isVisible = signal(false);

  toggleFieldset() {
    this.isVisible.set(!this.isVisible());
  }
}
