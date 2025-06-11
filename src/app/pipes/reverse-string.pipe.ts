import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      throw new Error('A value must be provided !');
    }
    return [...value].reverse().join('').toString();
  }
}
