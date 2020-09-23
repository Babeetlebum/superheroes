import { createAction, props } from '@ngrx/store';

import { Superhero } from '@models';

export const addSuperhero = createAction('Superhero List > Add Superhero', props<{ superhero: Superhero }>());
export const selectSuperhero = createAction('Superhero List > Select Superhero', props<{ id: number }>());
export const removeSuperhero = createAction('Superhero List > Remove Superhero', props<{ id: number }>());

export const loadSuperheroes = createAction('Superhero List > Load Superheroes');

export const loadSuperheroesSuccess = createAction(
    'SuperHero Repository > Loading success',
    props<{ superheroes: Superhero[] }>(),
);

export const loadSuperheroesFailure = createAction(
    'SuperHero Repository > Loading failure',
    props<{ error: string }>(),
);
