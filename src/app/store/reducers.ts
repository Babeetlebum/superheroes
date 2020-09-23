import { createReducer, on } from '@ngrx/store';

import { Superhero } from '@models';
import {
    addSuperhero,
    loadSuperheroes,
    loadSuperheroesFailure,
    loadSuperheroesSuccess,
    removeSuperhero,
    selectSuperhero,
} from './actions';

export interface AppState {
    superhero: SuperheroState;
}

export interface SuperheroState {
    superheroes: Superhero[];
    loading: boolean;
    error: string | null;
    currentSuperhero: Superhero | null;
}

export const initialState: SuperheroState = {
    superheroes: [],
    loading: false,
    error: null,
    currentSuperhero: null,
};

export const reducers = createReducer<SuperheroState>(
    initialState,
    on(addSuperhero, (state, { superhero }) => ({ ...state, superheroes: [...state.superheroes, superhero] })),
    on(selectSuperhero, (state, { id }) => ({ ...state, currentSuperhero: getSuperHero(id, state.superheroes) })),
    on(removeSuperhero, (state, { id }) => ({ ...state, superheroes: deleteSuperhero(id, state.superheroes) })),
    on(loadSuperheroes, (state) => ({ ...state, error: null, loading: true })),
    on(loadSuperheroesFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(loadSuperheroesSuccess, (state, { superheroes }) => ({ ...state, superheroes, loading: false })),
);

const getSuperHero = (id: number, superheroes: Superhero[]): Superhero | null =>
    superheroes.find((superhero) => superhero.id === id);

const deleteSuperhero = (id: number, superheroes: Superhero[]): Superhero[] => {
    const map = new Map<number, Superhero>(superheroes.map((superhero) => [superhero.id, superhero]));
    map.delete(id);

    return Array.from(map.values());
};
