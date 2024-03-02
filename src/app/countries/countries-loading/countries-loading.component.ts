import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'countries-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './countries-loading.component.html',
  styleUrl: './countries-loading.component.scss',
})
export class CountriesLoadingComponent {
  loadingItems;

  constructor() {
    this.loadingItems = new Array(10);
  }
}
