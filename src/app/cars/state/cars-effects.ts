
import {catchError, map, switchMap} from 'rxjs/operators';

import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';



import { CarService } from '../car.service';
import * as actions from './cars.actions';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions,
              private carService: CarService) {
  }

  getAllCarsEffects$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.GET_ALL_CARS),
      switchMap(() =>
        this.carService.getCars().pipe(
          map(carList => new actions.GetAllCarsSuccess(carList)),
          catchError(error => of(new actions.GetAllCarsError(error)))
        )
      )
    )
  );
}
