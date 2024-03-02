import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleTheme } from '../../_store/Theme/theme.actions';
import { getThemeMode } from '../../_store/Theme/theme.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
})
export class ToggleThemeComponent implements OnDestroy {
  theme$;
  themeSubscription: Subscription;
  darkMode: boolean = false;
  constructor(private store: Store) {
    this.theme$ = store.select(getThemeMode);
    this.themeSubscription = this.theme$.subscribe(
      (theme) => (this.darkMode = theme)
    );
  }

  toggleTheme() {
    this.store.dispatch(ToggleTheme());
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
