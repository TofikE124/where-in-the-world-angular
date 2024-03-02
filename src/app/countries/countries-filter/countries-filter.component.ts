import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountrySummary } from '../../_model/CountrySummary';
import { SearchInputComponent } from './search-input/search-input.component';
import { CountriesDropdownComponent } from './countries-dropdown/countries-dropdown.component';

@Component({
  selector: 'countries-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchInputComponent,
    CountriesDropdownComponent,
  ],
  templateUrl: './countries-filter.component.html',
  styleUrl: './countries-filter.component.scss',
})
export class CountriesFilterComponent implements OnInit {
  @Input('countries') countries: CountrySummary[] = [];
  // @Output('filterChange') filterChange: EventEmitter<CountrySummary[]> =
  //   new EventEmitter();

  search: string = '';
  region: string = '';

  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe((queryParams) => {
      this.search = queryParams.get('search') || '';
      this.region = queryParams.get('region') || '';
    });
  }
  ngOnInit(): void {
    // this.applyFilter();
  }

  // applyFilter() {
  //   let filteredCountries = this.countries.filter((country) =>
  //     country.name.common
  //       .toLowerCase()
  //       .includes(this.search.toLowerCase().trim())
  //   );
  //   if (this.region)
  //     filteredCountries = filteredCountries.filter(
  //       (country) =>
  //         country.region.toLocaleLowerCase() === this.region.toLowerCase()
  //     );

  //   this.filterChange.emit(filteredCountries);
  // }
}
