import { Component, computed, input, signal } from '@angular/core';
import { PillComponent } from '../pill/pill.component';
import { pillType } from '../../models';

@Component({
  selector: 'app-pill-filters',
  imports: [PillComponent],
  templateUrl: './pill-filters.component.html',
  styleUrl: './pill-filters.component.scss',
})
export class PillFiltersComponent {
  enumPillsLabel: typeof pillType = pillType;
  labels = input.required<string[]>();
  selectedLabels = signal<string[]>([]);

  selectedPills = computed(() => {
    return [...this.labels()].filter((label) =>
      this.selectedLabels().includes(label),
    );
  });

  unSelectedPills = computed(() => {
    return [...this.labels()].filter(
      (label) => !this.selectedLabels().includes(label),
    );
  });

  onAddPill(selectedLabel: string) {
    if (!this.selectedLabels().includes(selectedLabel)) {
      this.selectedLabels.update((arr) => [...arr, selectedLabel]);
    }
  }

  onRemovePill(selectedLabel: string) {
    if (this.selectedLabels().includes(selectedLabel)) {
      this.selectedLabels.update((arr) =>
        arr.filter((label) => label != selectedLabel),
      );
    }
  }
}
