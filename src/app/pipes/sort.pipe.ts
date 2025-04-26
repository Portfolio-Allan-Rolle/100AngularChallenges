import { Pipe, PipeTransform } from '@angular/core';
import { sortType } from '../models';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[], type: string): unknown {
    if (value.length == 0) {
      throw new Error('Parameter must be an array of strings');
    } else if (sortType.ASC == type) {
      return [...value].sort((a, b) => a.localeCompare(b));
    } else if (sortType.DESC == type) {
      return [...value].sort((a, b) => b.localeCompare(a));
    } else {
      return value;
    }
  }
}
