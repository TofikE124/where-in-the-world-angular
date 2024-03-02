import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeComponent } from './theme/theme.component';
import { CountriesComponent } from './countries/countries.component';
import { Store } from '@ngrx/store';
import { ToggleTheme } from './_store/Theme/theme.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ThemeComponent, CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Where-in-the-world-angular';

  constructor(private store: Store, private router: Router) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (this.shouldPreventScrollToTop(event.url)) {
    //       return;
    //     }
    //     window.scrollTo({ top: 0, behavior: 'instant' });
    //   }
    // });
  }

  private shouldPreventScrollToTop(url: string): boolean {
    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL(url);

    return (
      currentUrl.origin === targetUrl.origin &&
      currentUrl.pathname === targetUrl.pathname &&
      currentUrl.search !== targetUrl.search
    );
  }

  ngOnInit(): void {
    if (localStorage) {
      const darkMode = JSON.parse(localStorage.getItem('darkMode') || '');
      if (darkMode) this.store.dispatch(ToggleTheme());
    }
  }
}
