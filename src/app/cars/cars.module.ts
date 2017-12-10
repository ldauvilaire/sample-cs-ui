import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

import { CarService } from './car.service';
import { initialCarState } from './state/car-state';
import { carsReducer } from './state/cars.reducers';
import { CarsEffects } from './state/cars-effects';

export function getInitialState() {
  return {...initialCarState};
}

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    StoreModule.forFeature('cars', carsReducer, { initialState: getInitialState }),
    EffectsModule.forFeature([ CarsEffects ])

  ],
  declarations: [ CarsComponent, CarDetailsComponent, CarsListComponent ],
  providers: [ CarService ]
})
export class CarsModule { }
