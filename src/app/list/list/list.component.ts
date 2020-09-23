import { Component, OnInit, TrackByFunction } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Superhero } from '@models';
import { loadSuperheroes, selectSuperheroes } from '@store';

@Component({
    selector: 'sup-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    superheroes$ = this.store.pipe(select(selectSuperheroes));

    constructor(private readonly store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadSuperheroes());
    }

    trackBySuperhero: TrackByFunction<Superhero> = (index: number, superhero: Superhero) => superhero.id;
}
