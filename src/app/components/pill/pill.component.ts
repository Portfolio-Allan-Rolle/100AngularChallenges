import { Component, EventEmitter, input, output } from '@angular/core';
import { pillType } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pill',
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
})
export class PillComponent {
  label = input.required<string>();
  type = input.required<string>();
  icon = input<string>();
  enumPillType: typeof pillType = pillType;
  onSelect = output<string>();
  onRemove = output<string>();
  closeButton = input<boolean>(false);

  onSelectPill(label: string) {
    this.onSelect.emit(label);
  }

  onRemovePill(e: Event, label: string) {
    e.stopPropagation();
    this.onRemove.emit(label);
  }
}
