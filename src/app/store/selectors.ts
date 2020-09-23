import { createSelector } from '@ngrx/store';

import { Gender } from '@models';
import { AppState } from './reducers';

export const selectSuperheroState = (state: AppState) => state.superhero;
export const selectSuperheroes = createSelector(selectSuperheroState, (state) => state.superheroes);
export const selectCurrentSuperhero = createSelector(selectSuperheroState, (state) => state.currentSuperhero);
export const selectFemaleSuperheroes = createSelector(selectSuperheroes, (superheroes) =>
    superheroes.filter((superhero) => superhero.gender === Gender.FEMALE),
);
