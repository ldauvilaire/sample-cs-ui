import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { AirportService } from '../airport.service';
import * as fromAirportsActions from './airports.actions';

@Injectable()
export class AirportsEffects {

  @Effect() getAllAirportsEffects$ = this.actions$
    .ofType(fromAirportsActions.GET_ALL_AIRPORTS)
    .switchMap(() => this.airportService.getAirports()
      .map(airportList => new fromAirportsActions.GetAllAirportsSuccess(airportList)
    ).catch((error) => {
      return Observable.of(new fromAirportsActions.GetAllAirportsError(error));
    })
  );

  constructor(
    private actions$: Actions,
    private airportService: AirportService
  ) { }
}