import { Component, signal } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';
import { FlattenPipe } from '../../pipes/flatten.pipe';
import { FilterTermPipe } from '../../pipes/filter-term.pipe';

@Component({
  selector: 'app-pipes-documentation',
  imports: [TruncatePipe, CreditCardFormatterPipe, FlattenPipe, FilterTermPipe],
  templateUrl: './pipes-documentation.component.html',
  styleUrl: './pipes-documentation.component.scss',
})
export class PipesDocumentationComponent {
  dataTruncatePipe =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu at turpis molestie aliquam. Suspendisse imperdiet nisi eu n.';

  creditCardNumber = signal('98 7654321 5678987');

  dataToFlatten = signal([1, 2, [3, 4], [5, 6, [7, 8]]]);

  changeToInvalidLength() {
    this.creditCardNumber.set('8888');
  }
  changeToInvalidCaracters() {
    this.creditCardNumber.set('123456789987654Z');
  }
  changeToValid() {
    this.creditCardNumber.set('5678998765432123');
  }

  dataToFilter = [
    'Hello World',
    'ipsum',
    'Hello WORLD',
    'dolor',
    'sit',
    'Hello world',
    'amet',
    'A Whole new World',
    'consectetur',
    'I live in my own world',
    'adipiscing',
    'Love the World',
    'elit',
    'Nam',
    'This world is mine',
    'dapibus',
    'I love this world',
  ];
}
