import { Component, computed, signal } from '@angular/core';
import { continents, countries } from '../../models';

@Component({
  selector: 'app-continent-dropdrown',
  imports: [],
  templateUrl: './continent-dropdrown.component.html',
  styleUrl: './continent-dropdrown.component.scss',
})
export class ContinentDropdrownComponent {
  readonly continents = Object.values(continents);
  readonly countriesData = countries;
  selectedContinent = signal('');
  selectedCountry = signal('');

  countries = computed(() => {
    const selectedCountry = this.selectedContinent();
    const countries = this.countriesData;
    return [...countries].filter(
      (country) => country.continent == selectedCountry
    );
  });

  onSelectingContinent($event: Event) {
    this.selectedContinent.set(($event.target as HTMLSelectElement).value);
    this.selectedCountry.set('');
  }

  onSelectingCountry($event: Event) {
    this.selectedCountry.set(($event.target as HTMLSelectElement).value);
  }
}
