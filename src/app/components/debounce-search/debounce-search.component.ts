import { Component, OnInit, output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  imports: [],
  templateUrl: './debounce-search.component.html',
  styleUrl: './debounce-search.component.scss',
})
export class DebounceSearchComponent implements OnInit {
  onDebounceSearch = output<string>();
  search$ = new Subject<string>();

  onSearch(search: EventTarget | null) {
    const searchTerm = (search as HTMLInputElement).value;
    this.search$.next(searchTerm);
  }

  onUpdate() {
    this.search$.pipe(distinctUntilChanged(), debounceTime(500)).subscribe({
      next: (term) => this.onDebounceSearch.emit(term),
    });
  }

  ngOnInit(): void {
    this.onUpdate();
  }
}
