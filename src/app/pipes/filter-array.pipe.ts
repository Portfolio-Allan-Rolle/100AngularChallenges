import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(items: any[], property: string, filterValue: number): object[] {
    if (!items) return [];
    return [...items].filter((obj) => obj[property] >= filterValue);
  }
}
