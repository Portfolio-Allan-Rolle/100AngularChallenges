import { Component, signal } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';
import { FlattenPipe } from '../../pipes/flatten.pipe';
import { FilterTermPipe } from '../../pipes/filter-term.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { sortType } from '../../models';
import { ContainerComponent } from '../../components/container/container.component';
import { SortByKeyPipe } from '../../pipes/sort-by-key.pipe';
import { RichTextPipe } from '../../pipes/rich-text.pipe';
import { CommonModule } from '@angular/common';
import { UppercaseFirstPipe } from '../../pipes/uppercase-first.pipe';
import { ReverseStringPipe } from '../../pipes/reverse-string.pipe';
import { FilterArrayPipe } from '../../pipes/filter-array.pipe';

@Component({
  selector: 'app-pipes-documentation',
  imports: [
    FilterArrayPipe,
    ReverseStringPipe,
    UppercaseFirstPipe,
    RichTextPipe,
    SortByKeyPipe,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    FilterTermPipe,
    SortPipe,
    ContainerComponent,
    CommonModule,
  ],
  templateUrl: './pipes-documentation.component.html',
  styleUrl: './pipes-documentation.component.scss',
})
export class PipesDocumentationComponent {
  richTextPipeSample = '<p>Hello World !</p>';

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

  sortEnum: typeof sortType = sortType;

  dataToSort = [
    'leadership',
    'guitar',
    'childhood',
    'boyfriend',
    'reflection',
    'nation',
    'transportation',
    'tea',
    'decision',
    'appointment',
  ];

  dataToSortByKey = [
    { content: 'Courses' },
    { content: 'Youtube' },
    { content: 'History' },
    { content: 'Travel' },
    { content: 'University' },
    { content: 'Internet' },
  ];

  uppercaseFirstdata = 'hello world';
  reverseStringData = 'Angular';
  filterArrayData = [
    { id: 1, name: 'allan', age: 35 },
    { id: 3, name: 'nick', age: 29 },
    { id: 4, name: 'joe', age: 18 },
    { id: 5, name: 'zack', age: 52 },
  ];
}
