import * as fromAirportActions from './airports.actions';
import { mockAirports } from '../../testing/mockdata';

describe('The Airports actions', () => {

  it('should return action with type [Airports] Get All when getAllAirports is called', () => {
    const actual = fromAirportActions.getAllAirports();
    expect(actual.type).toBe('[Airports] Get All');
  });

  it('should return action with type [Airports] Get All Success and airports payload ' +
      'when getAllAirportsSuccess is called', () => {
    const actual = fromAirportActions.getAllAirportsSuccess({ airports: mockAirports });
    expect(actual.type).toBe('[Airports] Get All Success');
    expect(actual.airports).toBe(mockAirports);
  });
});
