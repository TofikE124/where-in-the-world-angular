import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'countries-filter-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './countries-filter-loading.component.html',
  styleUrl: './countries-filter-loading.component.scss',
})
export class CountriesFilterLoadingComponent {}
