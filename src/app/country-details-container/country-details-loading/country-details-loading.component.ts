import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ThemeModeService } from '../../services/theme-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-details-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './country-details-loading.component.html',
  styleUrl: './country-details-loading.component.scss',
})
export class CountryDetailsLoadingComponent {
  darkMode$;
  constructor(themeService: ThemeModeService) {
    this.darkMode$ = themeService.getDarkMode();
  }
}
