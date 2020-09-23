import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ApiBindingsModule } from '@api-bindings';
import { reducers, SuperheroEffects } from '@store';
import { environment } from '../../environments/environment';

@NgModule({
    declarations: [],
    imports: [
        ApiBindingsModule,
        CommonModule,
        StoreModule.forRoot({ superhero: reducers }),
        EffectsModule.forRoot([SuperheroEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
})
export class CoreModule {}
