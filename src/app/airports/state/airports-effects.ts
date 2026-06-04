import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AirportService } from '../airport.service';
import * as AirportsActions from './airports.actions';

@Injectable()
export class AirportsEffects {

  public getAllAirports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AirportsActions.getAllAirports),
      switchMap(() =>
        this.airportService.getAirports().pipe(
          map(airports => AirportsActions.getAllAirportsSuccess({ airports })),
          catchError(error => of(AirportsActions.getAllAirportsError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions,
              private airportService: AirportService) {
  }
}
