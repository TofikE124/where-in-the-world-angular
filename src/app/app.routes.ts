import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsContainerComponent } from './country-details-container/country-details-container.component';

export const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'country/:name', component: CountryDetailsContainerComponent },
];
