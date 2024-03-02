import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryDetails } from '../../_model/CountryDetails';

@Component({
  selector: 'country-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsComponent {
  @Input('country') country?: CountryDetails;
}
