import { mockAirports } from '../../testing/mockdata';

import { AirportState } from './airport-state';
import * as fromAirportsReducers from './airports.reducers';
import * as fromAirportsActions from './airports.actions';

let state: AirportState;

describe('The Airports reducer', () => {

  beforeEach(() => {
    state = {
      airportList: [],
      isAirportListLoaded: false
    };
  });

  fit('should set AirportList to empty array when ' +
      'AirportsActions.GET_ALL_AIRPORTS is called', () => {

    const actual = fromAirportsReducers.airportsReducer(state, new fromAirportsActions.GetAllAirports());
    expect(actual.airportList.length).toBe(0);
  });

  fit('should set AirportList when ' +
      'AirportsActions.GetAllAirportsSuccess is called', () => {
    const actual = fromAirportsReducers.airportsReducer(state, new fromAirportsActions.GetAllAirportsSuccess(mockAirports));
    expect(actual.airportList).toBe(mockAirports);
  });
});
