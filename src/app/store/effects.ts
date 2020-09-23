import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { SuperheroRepository } from '@api-bindings';
import { loadSuperheroes, loadSuperheroesFailure, loadSuperheroesSuccess } from './actions';

@Injectable({ providedIn: 'root' })
export class SuperheroEffects {
    loadSuperheroes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadSuperheroes),
            mergeMap(() =>
                this.superheroRepository.loadSuperheroes().pipe(
                    map((superheroes) => loadSuperheroesSuccess({ superheroes })),
                    catchError((error: string) => of(loadSuperheroesFailure({ error }))),
                ),
            ),
        ),
    );

    constructor(private readonly actions$: Actions, private readonly superheroRepository: SuperheroRepository) {}
}
