import { Component, input } from '@angular/core';
import { IAccordionItem } from '../../models';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  items = input.required<IAccordionItem[]>();

  onSelectItem(item: IAccordionItem) {
    item.isExpanded = !item.isExpanded;
  }
}
