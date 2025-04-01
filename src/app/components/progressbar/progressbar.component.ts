import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
})
export class ProgressbarComponent {
  valueNow = input.required<number>();
  onUpdate = output();
  update() {
    this.onUpdate.emit();
  }
}
