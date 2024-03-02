import { Component } from '@angular/core';
import { getThemeMode } from '../_store/Theme/theme.selector';
import { Store } from '@ngrx/store';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  theme;
  constructor(private store: Store) {
    this.theme = this.store.select(getThemeMode);
  }
}
