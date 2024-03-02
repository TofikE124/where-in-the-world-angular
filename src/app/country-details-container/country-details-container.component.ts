import { Component, OnDestroy } from '@angular/core';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';
import { ThemeModeService } from '../services/theme-mode.service';
import { CommonModule, Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { CountryDetails } from '../_model/CountryDetails';
import { count } from 'console';
import { CountryDetailsLoadingComponent } from './country-details-loading/country-details-loading.component';

@Component({
  selector: 'app-country-details-container',
  standalone: true,
  imports: [
    CountryDetailsComponent,
    CountryDetailsLoadingComponent,
    CommonModule,
  ],
  templateUrl: './country-details-container.component.html',
  styleUrl: './country-details-container.component.scss',
})
export class CountryDetailsContainerComponent implements OnDestroy {
  name: string = '';
  darkMode$;
  country$?: Observable<CountryDetails>;
  country?: CountryDetails;
  countryLoading = true;
  countrySubscription?: Subscription;

  constructor(
    route: ActivatedRoute,
    private countryService: CountryService,
    themeService: ThemeModeService,
    private location: Location
  ) {
    route.paramMap.subscribe((params) => {
      this.name = params.get('name') || '';
      this.populateCountry();
    });
    this.darkMode$ = themeService.getDarkMode();
  }

  populateCountry() {
    this.country$ = this.countryService.getCountry(this.name);

    this.countrySubscription = this.country$.subscribe((country) => {
      this.country = country;
      this.countryLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.countrySubscription?.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}
