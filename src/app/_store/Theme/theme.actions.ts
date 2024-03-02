import { createAction } from '@ngrx/store';

export const TOGGLE_THEME = '[theme] toggleTheme';

export const ToggleTheme = createAction(TOGGLE_THEME);
