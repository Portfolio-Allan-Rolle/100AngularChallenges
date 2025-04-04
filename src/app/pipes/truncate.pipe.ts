import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 100): string {
    if (value.length > length) {
      return value.slice(0, length) + '...';
    } else {
      return value;
    }
  }
}
