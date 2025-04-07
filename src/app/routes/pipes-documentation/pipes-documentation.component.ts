import { Component, signal } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';

@Component({
  selector: 'app-pipes-documentation',
  imports: [TruncatePipe, CreditCardFormatterPipe],
  templateUrl: './pipes-documentation.component.html',
  styleUrl: './pipes-documentation.component.scss',
})
export class PipesDocumentationComponent {
  dataTruncatePipe =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu at turpis molestie aliquam. Suspendisse imperdiet nisi eu n.';

  creditCardNumber = signal('98 7654321 5678987');

  changeToInvalidLength() {
    this.creditCardNumber.set('8888');
  }
  changeToInvalidCaracters() {
    this.creditCardNumber.set('123456789987654Z');
  }
  changeToValid() {
    this.creditCardNumber.set('5678998765432123');
  }
}
