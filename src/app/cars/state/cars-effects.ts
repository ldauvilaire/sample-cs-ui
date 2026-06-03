import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CarService } from '../car.service';
import * as CarsActions from './cars.actions';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions,
              private carService: CarService) {
  }

  getAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarsActions.getAllCars),
      switchMap(() =>
        this.carService.getCars().pipe(
          map(cars => CarsActions.getAllCarsSuccess({ cars })),
          catchError(error => of(CarsActions.getAllCarsError({ error })))
        )
      )
    )
  );
}
