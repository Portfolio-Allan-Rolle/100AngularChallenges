import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'urlify' })
export class URLifyPipe implements PipeTransform {
  transform(input: string): string {
    if (!input) return '';
    return input
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove non-word characters except hyphens
  }
}
