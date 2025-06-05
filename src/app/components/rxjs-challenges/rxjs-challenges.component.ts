import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { from, interval, map, of, take, tap } from 'rxjs';
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
}
