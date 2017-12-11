import * as fromAirportActions from './airports.actions';
import { mockAirports } from '../../testing/mockdata';

describe('The Airports actions', () => {

  fit('should return action with type:GET_ALL_AIRPORTS when getAirports is called', () => {
    const actual = new fromAirportActions.GetAllAirports();
    expect(actual.type).toBe(fromAirportActions.GET_ALL_AIRPORTS);
  });

  fit('should return action with type:GET_ALL_AIRPORTS_SUCCESS and payload:AirportsList ' +
                ' when getAirportsSuccess is called', () => {

    const actual = new fromAirportActions.GetAllAirportsSuccess(mockAirports);
    expect(actual.type).toBe(fromAirportActions.GET_ALL_AIRPORTS_SUCCESS);
    expect(actual.payload).toBe(mockAirports);
  });
});
