import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(
    value: number,
    exchangeRate: number,
    currencySymbol: string,
  ): string {
    if (isNaN(value) || isNaN(exchangeRate)) {
      throw new Error('A value must be provided !');
    }
    return `${(value * exchangeRate).toFixed(1)}${currencySymbol}`;
  }
}
