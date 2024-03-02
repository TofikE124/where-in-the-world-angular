import { createReducer, on } from '@ngrx/store';
import { themeState } from './theme.state';
import { ToggleTheme } from './theme.actions';
import { ThemeModel } from '../../_model/Theme';

const _ThemeReducer = createReducer(
  themeState,
  on(ToggleTheme, (state: ThemeModel) => {
    localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
    return { darkMode: !state.darkMode };
  })
);

export function ThemeReducer(state: any, action: any) {
  return _ThemeReducer(state, action);
}
