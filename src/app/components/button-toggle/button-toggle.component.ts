import { Component, input, signal } from '@angular/core';
import { IButtonGroup } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-toggle',
  imports: [CommonModule],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
  data = input.required<IButtonGroup[]>();
  selection = signal<IButtonGroup | null>(null);
  onSelectItem(item: IButtonGroup) {
    this.selection.set(item);
  }
}
