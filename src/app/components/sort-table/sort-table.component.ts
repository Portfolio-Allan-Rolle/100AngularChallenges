import { Component, computed, input, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-sort-table',
  imports: [KeyValuePipe],
  templateUrl: './sort-table.component.html',
  styleUrl: './sort-table.component.scss',
})
export class SortTableComponent {
  data = input<any[]>([]);
  selectedHeader = signal<any>({});

  sortedData = computed(() => {
    const { key, value } = this.selectedHeader();
    const data = this.data();
    switch (typeof value) {
      case 'boolean':
        return this.sortBoolean(data, key);
      case 'number':
        return this.sortByAge(data, key);
      case 'string':
        return this.sortString(value, key, data);
      default:
        return data;
    }
  });

  onSortingSelection(item: any) {
    this.selectedHeader.set(item);
  }

  sortBoolean(data: any[], key: string) {
    return [...data.sort((a, b) => (a[key] === b[key] ? 0 : a[key] ? -1 : 1))];
  }

  sortByAge(data: any[], key: string) {
    return [...data.sort((a, b) => a[key] - b[key])];
  }

  sortString(value: any, key: string, data: any[]) {
    if (!isNaN(new Date(value).getDate())) {
      const toDate = (el: string) =>
        new Date(el.split('/').reverse().join('-'));
      return [...data.sort((a, b) => +toDate(a[key]) - +toDate(b[key]))];
    } else {
      return [...data.sort((a, b) => a[key].localeCompare(b[key]))];
    }
  }
}
