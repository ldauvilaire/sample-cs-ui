import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { CarService } from '../car.service';
import * as actions from './cars.actions';

@Injectable()
export class CarsEffects {

  @Effect() getAllCarsEffects$ = this.actions$
    .ofType(actions.GET_ALL_CARS)
    .switchMap(() => this.carService.getCars()
      .map(CarList => new actions.GetAllCarsSuccess(CarList)
    ).catch((error) => {
      return Observable.of(new actions.GetAllCarsError(error));
    })
  );

  constructor(
    private actions$: Actions,
    private carService: CarService
  ) { }
}
