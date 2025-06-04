import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
})
export class ProgressbarComponent {
  value = input.required<number>();
  maxValue = input(100);
  withUpdateButton = input<boolean>();
  onUpdate = output();
  update() {
    this.onUpdate.emit();
  }
}
