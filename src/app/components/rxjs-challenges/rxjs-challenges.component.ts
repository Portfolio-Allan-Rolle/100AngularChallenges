import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { filter, from, interval, map, of, take, tap, toArray } from 'rxjs';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-rxjs-challenges',
  imports: [AsyncPipe, ContainerComponent, CommonModule],
  templateUrl: './rxjs-challenges.component.html',
  styleUrl: './rxjs-challenges.component.scss',
})
export class RxjsChallengesComponent {
  characters$ = of(['A', 'B', 'C']);
  characters2$ = from(['A', 'B', 'C']).subscribe(console.log);
  canPrintASCIICharacters = signal(false);
  asciiNumbers = signal<any[]>([]);
  ascii$ = interval(100)
    .pipe(
      map((n) => n + 33),
      tap((n) =>
        this.asciiNumbers.update((arr) => [
          ...arr,
          { key: n, value: String.fromCharCode(n) },
        ]),
      ),
      take(223),
    )
    .subscribe({
      complete: () => console.log('ASCII complete !'),
    });
  evenIntegers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
    filter((n) => n % 2 == 0),
    toArray(),
  );
  evenIntegersUpTo100$ = interval(1).pipe(
    take(101),
    filter((n) => n % 2 == 0),
    toArray(),
  );
}
