import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getThemeMode } from '../_store/Theme/theme.selector';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  constructor(private store: Store) {}

  getDarkMode() {
    return this.store.select(getThemeMode);
  }
}
