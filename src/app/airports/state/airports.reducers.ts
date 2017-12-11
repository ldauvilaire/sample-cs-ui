import * as fromAirportsActions from './airports.actions';
import { Airport, defaultAirport } from '../airport.model';

import { AirportState, initialAirportState } from './airport-state';

export function airportsReducer(state = initialAirportState, action: fromAirportsActions.AirportsActions): AirportState {
    let newState: AirportState;
    switch (action.type) {
        case fromAirportsActions.GET_ALL_AIRPORTS_SUCCESS:
            newState = Object.assign({}, state);
            newState.airportList = action.payload;
            newState.isAirportListLoaded = true;
            return newState;
        default:
            return state;
    }
}
