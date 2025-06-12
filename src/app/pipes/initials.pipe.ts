import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(fullName: string): string {
    if (!fullName) {
      throw new Error('A name must be provided !');
    }
    const nameParts = fullName.split(' ');
    return nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
  }
}
