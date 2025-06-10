import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  catchError,
  filter,
  from,
  interval,
  map,
  of,
  switchMap,
  take,
  tap,
  toArray,
} from 'rxjs';
import { ContainerComponent } from '../container/container.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromFetch } from 'rxjs/fetch';

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
  dummyPost = toSignal(
    fromFetch('https://dummyjson.com/posts/1').pipe(
      switchMap((response: any) => {
        if (response.ok) {
          // OK return data
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      tap((response: any) => console.log(response)),
      catchError((err) => {
        // Network or other error, handle appropriately
        console.error(err);
        return of({ error: true, message: err.message });
      }),
    ),
  );
}
