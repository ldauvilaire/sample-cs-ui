
import {catchError, map, switchMap} from 'rxjs/operators';

import { of as observableOf, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';



import { CarService } from '../car.service';
import * as actions from './cars.actions';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions,
              private carService: CarService) {
  }

  getAllCarsEffects$ =  createEffect(
    () => this.actions$.pipe(
      ofType(actions.GET_ALL_CARS),
      switchMap(() => this.carService.getCars()),
      map(CarList => new actions.GetAllCarsSuccess(CarList)),
      catchError(error => of(new actions.GetAllCarsError(error)))
    )
  );
}
