import { Component } from '@angular/core';
import { DropdownModule } from '../../../dropdown/dropdown.module';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'countries-dropdown',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule],
  templateUrl: './countries-dropdown.component.html',
  styleUrl: './countries-dropdown.component.scss',
})
export class CountriesDropdownComponent {
  region: string = '';
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private router: Router, private route: ActivatedRoute) {
    route.queryParamMap.subscribe((queryParams) => {
      this.region = queryParams.get('region') || '';
    });
  }
  valueChange(value: string | number) {
    this.router.navigate(['/'], {
      queryParams: {
        region: value ? value : null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
