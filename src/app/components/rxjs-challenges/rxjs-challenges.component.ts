import { AsyncPipe, CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  filter,
  forkJoin,
  fromEvent,
  from,
  interval,
  map,
  of,
  repeat,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
  timestamp,
  toArray,
  delay,
  reduce,
  mergeAll,
} from 'rxjs';
import { ContainerComponent } from '../container/container.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromFetch } from 'rxjs/fetch';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-challenges',
  imports: [AsyncPipe, ContainerComponent, CommonModule],
  templateUrl: './rxjs-challenges.component.html',
  styleUrl: './rxjs-challenges.component.scss',
})
export class RxjsChallengesComponent {
  http = inject(HttpClient);
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

  endpoint1 = 'https://dummyjson.com/posts/1';
  endpoint2 = 'https://dummyjson.com/posts/2';
  endpoint3 = 'https://dummyjson.com/posts/3';

  apiCall1$ = this.http.get<any[]>(this.endpoint1);
  apiCall2$ = this.http.get<any[]>(this.endpoint2);
  apiCall3$ = this.http.get<any[]>(this.endpoint3);

  dummyPost = toSignal(
    fromFetch(this.endpoint1).pipe(
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
  dummyPosts = toSignal(
    forkJoin([this.apiCall1$, this.apiCall2$, this.apiCall3$]),
  );

  counter$ = new BehaviorSubject(0);
  counterIncrease(): void {
    this.counter$.next(this.counter$.value + 1);
  }

  startDateDisplay$ = new Subject<any>();
  stopDateDisplay$ = new Subject<any>();
  currentTimeStamp$ = new Subject<any>();
  currentTime = interval(1000)
    .pipe(
      takeUntil(this.stopDateDisplay$),
      repeat({ delay: () => this.startDateDisplay$ }),
      timestamp(),
    )
    .subscribe({
      next: (v) => {
        const { timestamp } = v;
        const time = `${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}:${new Date(timestamp).getSeconds()}`;
        this.currentTimeStamp$.next(time);
      },
    });
  stopWatch() {
    this.stopDateDisplay$.next(EMPTY);
  }
  startWatch() {
    this.startDateDisplay$.next(EMPTY);
  }

  textFromInput$ = new BehaviorSubject('');

  textFromInput2$ = new BehaviorSubject<null | string>(null);
  textFromInput2 = toSignal(
    this.textFromInput2$.pipe(delay(1000), timestamp(), tap(console.log)),
  );

  integersArray$ = interval(1).pipe(
    take(20),
    map((n) => n + 1),
    toArray(),
  );

  intermediateSum$ = new BehaviorSubject<any>([]);
  reducedSum$ = new BehaviorSubject(0);
  reduce$ = this.integersArray$
    .pipe(
      mergeAll(),
      reduce((acc, curr) => {
        this.intermediateSum$.next([...this.intermediateSum$.value, acc]);
        return acc + curr;
      }, 0),
    )
    .subscribe({
      next: (v) => this.reducedSum$.next(v),
    });

  intervalOnRepeat$ = interval(1000).pipe(
    map((n) => n + 1),
    take(5),
    repeat({ count: 5, delay: 1000 }),
  );
}
