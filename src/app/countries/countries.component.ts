import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, filter } from 'rxjs';
import { CountrySummary } from '../_model/CountrySummary';
import { CountryService } from '../services/country.service';
import { CountriesFilterComponent } from './countries-filter/countries-filter.component';
import { CountriesLoadingComponent } from './countries-loading/countries-loading.component';
import { CountrySummaryComponent } from './country-summary/country-summary.component';
import { CountriesFilterLoadingComponent } from './countries-filter-loading/countries-filter-loading.component';
import { PagePaginatorComponent } from '../page-paginator/page-paginator.component';
import { FilterPaginationService } from './filter-pagination.service';

@Component({
  selector: 'countries',
  standalone: true,
  imports: [
    CountrySummaryComponent,
    CountriesFilterComponent,
    CommonModule,
    CountriesLoadingComponent,
    CountriesFilterLoadingComponent,
    PagePaginatorComponent,
  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent implements OnInit {
  countries: CountrySummary[] = [];
  filteredCountries$: Observable<CountrySummary[]>;
  paginatedCountries$: Observable<CountrySummary[]>;
  countriesLoading = true;
  countriesSubscription?: Subscription;

  constructor(
    private countryService: CountryService,
    private filterPaginationService: FilterPaginationService
  ) {
    this.filteredCountries$ = filterPaginationService.filteredCountries$;
    this.paginatedCountries$ = filterPaginationService.paginatedCountries$;
  }
  ngOnInit(): void {
    this.populateCountries();
  }

  populateCountries() {
    this.countriesSubscription = this.countryService
      .getAll()
      .subscribe((countries) => {
        this.countries = countries;
        this.countriesLoading = false;
        this.filterPaginationService.init(countries);
      });
  }
}
