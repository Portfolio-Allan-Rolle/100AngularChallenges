import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  private readonly maximumLength = 16;

  transform(value: string): string | null {
    const formattedValue = value.split(' ').join('');
    const hasInvalidCharacters = (cardNumber: string) =>
      [...cardNumber].every((c) => '0123456789'.includes(c));
    const formatCreditCardNumber = (cardNumber: string): string => {
      return [...cardNumber]
        .map((digit, index) => {
          if ((index + 1) % 4 === 0 && index + 1 != this.maximumLength) {
            return digit + '-';
          } else {
            return digit;
          }
        })
        .join('');
    };

    if (formattedValue.length < this.maximumLength) {
      return 'Invalid format: incorrect number of characters';
    }

    if (!hasInvalidCharacters(formattedValue)) {
      return 'Invalid format: contains non-digits caracters';
    }
    return formatCreditCardNumber(formattedValue);
  }
}
