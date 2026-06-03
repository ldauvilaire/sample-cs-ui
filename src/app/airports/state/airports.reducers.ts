import { createReducer, on } from '@ngrx/store';

import { AirportState, initialAirportState } from './airport-state';
import * as AirportsActions from './airports.actions';

export const airportsReducer = createReducer(
  initialAirportState,
  on(AirportsActions.getAllAirportsSuccess, (state, { airports }): AirportState => ({
    ...state,
    airportList: airports,
    isAirportListLoaded: true,
  }))
);
