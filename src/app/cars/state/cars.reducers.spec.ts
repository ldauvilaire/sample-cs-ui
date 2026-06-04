import { mockCars } from '../../testing/mockdata';

import { defaultCar } from '../car.model';

import { CarState } from './car-state';
import * as fromCarsReducers from './cars.reducers';
import * as fromCarsActions from './cars.actions';

let state: CarState;

describe('The Cars reducer', () => {

  beforeEach(() => {
    state = {
      carList: [],
      selectedCar: defaultCar,
      isCarListLoaded: false
    };
  });

  it('should set CarList to empty array and selectedCar to default when getAllCars is called', () => {
    const actual = fromCarsReducers.carsReducer(state, fromCarsActions.getAllCars());
    expect(actual.carList.length).toBe(0);
    expect(actual.selectedCar.id).toBe(defaultCar.id);
    expect(actual.selectedCar.manufacturer).toBe(defaultCar.manufacturer);
    expect(actual.selectedCar.price).toBe(defaultCar.price);
  });

  it('should set CarList when getAllCarsSuccess is called', () => {
    const actual = fromCarsReducers.carsReducer(state, fromCarsActions.getAllCarsSuccess({ cars: mockCars }));
    expect(actual.carList).toBe(mockCars);
  });

  it('should set the selectedCar when getCarDetails is called with carId', () => {
    state.carList = mockCars;
    const actual = fromCarsReducers.carsReducer(state, fromCarsActions.getCarDetails({ carId: mockCars[0].id }));
    expect(actual.selectedCar.id).toBe(mockCars[0].id);
    expect(actual.selectedCar.manufacturer).toBe(mockCars[0].manufacturer);
    expect(actual.selectedCar.price).toBe(mockCars[0].price);
  });
});
