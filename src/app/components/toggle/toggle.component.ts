import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  isOn = signal(true);
  onChange(event: Event) {
    this.isOn.set((event.target as HTMLInputElement).checked);
  }
}
