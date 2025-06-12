import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayShuffle' })
export class ArrayShufflePipe implements PipeTransform {
  transform(array: any[]): any[] {
    if (!array){
      throw new Error('A value must be provided !')
    }

    let currentIndex = array.length,
      randomIndex,
      temporaryValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
