import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { AirportsComponent } from './airports.component';
import { AirportsListComponent } from './airports-list/airports-list.component';

import { AirportService } from './airport.service';
import { initialAirportState } from './state/airport-state';
import { airportsReducer } from './state/airports.reducers';
import { AirportsEffects } from './state/airports-effects';

export function getInitialState() {
  return {...initialAirportState};
}

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    StoreModule.forFeature('airports', airportsReducer, { initialState: getInitialState }),
    EffectsModule.forFeature([ AirportsEffects ])
  ],
  declarations: [ AirportsComponent, AirportsListComponent ],
  providers: [ AirportService ]
})
export class AirportsModule { }
