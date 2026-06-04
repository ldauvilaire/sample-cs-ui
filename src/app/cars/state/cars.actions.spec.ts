import * as fromCarActions from './cars.actions';
import { mockCars } from '../../testing/mockdata';

describe('The Cars actions', () => {

  it('should return action with type [Cars] Get All when getAllCars is called', () => {
    const actual = fromCarActions.getAllCars();
    expect(actual.type).toBe('[Cars] Get All');
  });

  it('should return action with type [Cars] Get All Success and cars payload ' +
      'when getAllCarsSuccess is called', () => {
    const actual = fromCarActions.getAllCarsSuccess({ cars: mockCars });
    expect(actual.type).toBe('[Cars] Get All Success');
    expect(actual.cars).toBe(mockCars);
  });

  it('should return action with type [Cars] Get Details and carId payload ' +
      'when getCarDetails is called', () => {
    const actual = fromCarActions.getCarDetails({ carId: mockCars[0].id });
    expect(actual.type).toBe('[Cars] Get Details');
    expect(actual.carId).toBe(mockCars[0].id);
  });
});
