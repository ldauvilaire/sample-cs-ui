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

  it('should set AirportList to empty array when getAllAirports is called', () => {
    const actual = fromAirportsReducers.airportsReducer(state, fromAirportsActions.getAllAirports());
    expect(actual.airportList.length).toBe(0);
  });

  it('should set AirportList when getAllAirportsSuccess is called', () => {
    const actual = fromAirportsReducers.airportsReducer(state, fromAirportsActions.getAllAirportsSuccess({ airports: mockAirports }));
    expect(actual.airportList).toBe(mockAirports);
  });
});
