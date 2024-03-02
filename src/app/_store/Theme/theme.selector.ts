import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeModel } from '../../_model/Theme';

const getThemeState = createFeatureSelector<ThemeModel>('theme');

export const getThemeMode = createSelector(getThemeState, (state) => {
  return state.darkMode;
});
