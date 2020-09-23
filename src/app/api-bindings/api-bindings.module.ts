import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SuperheroMapper } from './superhero.mapper';
import { SuperheroRepository } from './superhero.repository';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [SuperheroRepository, SuperheroMapper],
})
export class ApiBindingsModule {}
