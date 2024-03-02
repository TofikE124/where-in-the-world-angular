import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountrySummary } from '../../_model/CountrySummary';

@Component({
  selector: 'country-summary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-summary.component.html',
  styleUrl: './country-summary.component.scss',
})
export class CountrySummaryComponent {
  @Input('country') country?: CountrySummary;
}
