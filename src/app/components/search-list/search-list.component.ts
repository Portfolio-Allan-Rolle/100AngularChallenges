import { Component, model, input, signal } from '@angular/core';
import { FilterTermPipe } from '../../pipes/filter-term.pipe';

@Component({
  selector: 'app-search-list',
  imports: [FilterTermPipe],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss',
})
export class SearchListComponent {
  public term = model('');
  public showSearchResults = signal(true);
  dataSearch = input<string[]>(['']);
  onSearchItemSelection(term: string) {
    this.term.set(term);
    this.showSearchResults.set(false);
  }
}
