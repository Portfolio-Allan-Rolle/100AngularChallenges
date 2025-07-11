import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(timestamp: number | Date): string {
    if (!timestamp) return '';
    return formatDistanceToNow(timestamp) + ' ago';
  }
}
