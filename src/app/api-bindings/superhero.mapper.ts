import { Injectable } from '@angular/core';

import { getGender, Superhero } from '@models';
import { SuperheroGetDto } from './superhero.dto';

@Injectable()
export class SuperheroMapper {
    mapFromGet = (superheroDto: SuperheroGetDto): Superhero => ({
        id: superheroDto.id,
        firstname: superheroDto.firstname,
        lastname: superheroDto.lastname,
        gender: getGender(superheroDto.gender),
        supername: superheroDto.supername,
        powers: [...superheroDto.powers],
    });
}
