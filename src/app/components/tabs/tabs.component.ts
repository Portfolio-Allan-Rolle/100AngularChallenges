import { Component, input, signal } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [NgComponentOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  data = input(<any>[]);
  currentSelectionIndex = signal<number>(0);

  onSelectionChange(index: number): void {
    this.currentSelectionIndex.set(index);
  }
}
