import { routes } from './../app.routes';
import { Injectable } from '@angular/core';
import { CountrySummary } from '../_model/CountrySummary';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterPaginationService {
  countries: CountrySummary[] = [];
  constructor(private route: ActivatedRoute) {}

  private filteredCountriesSubject = new BehaviorSubject<CountrySummary[]>([]);
  filteredCountries$ = this.filteredCountriesSubject.asObservable();

  private paginatedCountriesSubject = new BehaviorSubject<CountrySummary[]>([]);
  paginatedCountries$ = this.paginatedCountriesSubject.asObservable();

  search: string = '';
  region: string = '';
  pageIndex: number = 0;
  pageSize: number = 0;

  init(countries: CountrySummary[]) {
    this.countries = countries;
    this.route.queryParamMap.subscribe((queryParams) => {
      this.search = queryParams.get('search') || '';
      this.region = queryParams.get('region') || '';
      this.pageIndex = +(queryParams.get('pageIndex') || '');
      this.pageSize = +(queryParams.get('pageSize') || '');

      let filteredCountries = countries;

      if (this.region)
        filteredCountries = filteredCountries.filter(
          (country) => country.region === this.region
        );
      if (this.search)
        filteredCountries = filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(this.search.toLowerCase())
        );

      filteredCountries.sort((a, b) => b.population - a.population);

      this.filteredCountriesSubject.next(filteredCountries);

      let paginatedCountries = filteredCountries;

      let start = this.pageIndex * this.pageSize;
      let end = Math.min(start + this.pageSize, paginatedCountries.length);

      paginatedCountries = paginatedCountries.slice(start, end);

      this.paginatedCountriesSubject.next(paginatedCountries);
    });
  }
}
