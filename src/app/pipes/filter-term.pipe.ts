import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(dataArray: string[], termToFilterBy: string): string[] {
    return dataArray.filter((term) =>
      term.toLowerCase().includes(termToFilterBy)
    );
  }
}
