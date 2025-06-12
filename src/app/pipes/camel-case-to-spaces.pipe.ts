import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToSpaces',
})
export class CamelCaseToSpacesPipe implements PipeTransform {
  transform(value: string): string {
    return [...value].reduce((acc, curr, i) => {
      if (curr == curr.toUpperCase() && i == 0) {
        acc += curr;
        return acc;
      } else if (curr == curr.toUpperCase() && i != 0) {
        acc += ` ${curr.toLowerCase()}`;
      } else if (curr == curr.toLowerCase()) {
        acc += curr;
        return acc;
      }
      return acc;
    }, '');
  }
}
