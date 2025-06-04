import { Pipe, PipeTransform } from '@angular/core';
import { sortType } from '../models';

@Pipe({
  name: 'sortByKey',
})
export class SortByKeyPipe implements PipeTransform {
  transform(
    value: { [key: string]: string }[],
    key: string,
    type: string,
  ): { [key: string]: string }[] {
    if (value == null || value == undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort By Key pipe requires an array');
    }

    if (sortType.ASC == type) {
      return [...value].sort((a, b) =>
        a[key].toLowerCase().localeCompare(b[key].toLowerCase()),
      );
    } else if (sortType.DESC == type) {
      return [...value].sort((a, b) =>
        b[key].toLowerCase().localeCompare(a[key].toLowerCase()),
      );
    }

    return value;
  }
}
