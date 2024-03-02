import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModeService } from '../../../services/theme-mode.service';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  darkMode$;
  search: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private themeService: ThemeModeService
  ) {
    this.darkMode$ = themeService.getDarkMode();

    route.queryParamMap.subscribe((queryParams) => {
      this.search = queryParams.get('search') || '';
    });
  }

  searchChange(search: string) {
    this.router.navigate(['/'], {
      queryParams: {
        search: search ? search : null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
