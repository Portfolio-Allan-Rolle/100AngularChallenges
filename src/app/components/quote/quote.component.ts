import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
  quote = input.required();
  author = input.required();
  occupation = input.required();
}
