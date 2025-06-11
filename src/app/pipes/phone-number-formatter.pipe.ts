import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatter',
})
export class PhoneNumberFormatterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value.length !== 10) {
      throw new Error('A value must be provided !');
    }
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}
