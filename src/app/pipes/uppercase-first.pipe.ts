import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseFirst',
})
export class UppercaseFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      throw new Error('A value must be provided !');
    }
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }
}
