import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Superhero } from '@models';
import { SuperheroGetDto } from './superhero.dto';
import { SuperheroMapper } from './superhero.mapper';

@Injectable()
export class SuperheroRepository {
    constructor(private readonly http: HttpClient, private readonly superheroMapper: SuperheroMapper) {}

    loadSuperheroes(): Observable<Superhero[]> {
        return this.http
            .get<SuperheroGetDto[]>('./assets/superheroes.json')
            .pipe(map((superheroDtos) => superheroDtos.map(this.superheroMapper.mapFromGet)));
    }
}
