
import { catchError, map, switchMap } from 'rxjs/operators';

import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';



import { AirportService } from '../airport.service';
import * as fromAirportsActions from './airports.actions';

@Injectable()
export class AirportsEffects {

  constructor(private actions$: Actions,
              private airportService: AirportService) {
  }

  getAllAirportsEffects$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAirportsActions.GET_ALL_AIRPORTS),
      switchMap(() =>
        this.airportService.getAirports().pipe(
          map(airportList => new fromAirportsActions.GetAllAirportsSuccess(airportList)),
          catchError(error => of(new fromAirportsActions.GetAllAirportsError(error)))
        )
      )
    )
  );
}
