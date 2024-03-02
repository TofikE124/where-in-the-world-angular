import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CountryDetails } from '../_model/CountryDetails';
import { CountrySummary } from '../_model/CountrySummary';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<CountrySummary[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map((countries) =>
          countries.sort((a, b) => b.population - a.population)
        )
      );
  }

  private getBorder(alpha: string) {
    return this.http.get<{ name: { common: string } }>(
      `https://restcountries.com/v3.1/alpha/${alpha}?fields=name`
    );
  }

  getCountry(name: string) {
    return this.http
      .get<CountryDetails[]>(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      )
      .pipe(map((countries) => new CountryDetails(countries[0])))
      .pipe(
        map((country) => {
          let newBorders: string[] = [];
          country.borders.map((border) => {
            let border$ = this.getBorder(border);
            border$.subscribe((border) => {
              newBorders.push(border.name.common);
            });
          });
          country.borders = newBorders;
          return country;
        })
      );
  }
}
