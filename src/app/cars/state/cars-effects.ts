
import {catchError, map, switchMap} from 'rxjs/operators';

import {of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';



import { CarService } from '../car.service';
import * as actions from './cars.actions';

@Injectable()
export class CarsEffects {

  @Effect() getAllCarsEffects$ = this.actions$
    .ofType(actions.GET_ALL_CARS).pipe(
    switchMap(() => this.carService.getCars().pipe(
      map(CarList => new actions.GetAllCarsSuccess(CarList)
    ),catchError((error) => {
      return observableOf(new actions.GetAllCarsError(error));
    }),)
  ));

  constructor(
    private actions$: Actions,
    private carService: CarService
  ) { }
}
