import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-challenges',
  imports: [AsyncPipe],
  templateUrl: './rxjs-challenges.component.html',
  styleUrl: './rxjs-challenges.component.scss',
})
export class RxjsChallengesComponent {
  characters$ = of(['A', 'B', 'C']);
  characters2$ = from(['A', 'B', 'C']).subscribe(console.log);
}
