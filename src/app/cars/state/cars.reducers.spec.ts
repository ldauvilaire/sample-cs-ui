import { Action } from '@ngrx/store';

import { mockCars } from '../../testing/mockdata';

import { defaultCar } from '../car.model';

import { CarState } from './car-state';
import * as fromCarsReducers from './cars.reducers';
import * as fromCarsActions from './cars.actions';

let state: CarState;

describe('The Cars reducer', () => {

  beforeEach(() => {
    state = {
      carList: [],
      selectedCar: defaultCar,
      isCarListLoaded: false
    };
  });

  fit('should set CarList to empty array and selectedCar to default when ' +
                'CarsActions.GET_ALL_CARS is called', () => {

    const actual = fromCarsReducers.CarsReducer(state, new fromCarsActions.GetAllCars());
    expect(actual.carList.length).toBe(0);
    expect(actual.selectedCar.id).toBe(defaultCar.id);
    expect(actual.selectedCar.manufacturer).toBe(defaultCar.manufacturer);
    expect(actual.selectedCar.price).toBe(defaultCar.price);
  });

  fit('should set CarList when ' +
            'CarsActions.GetAllCarsSuccess is called', () => {
    const actual = fromCarsReducers.CarsReducer(state, new fromCarsActions.GetAllCarsSuccess(mockCars));
    expect(actual.carList).toBe(mockCars);
  });

  fit('should set the selectedCar when ' +
                'CarsActions.GET_CAR_DETAILS is called with CarId', () => {

    state.carList = mockCars;
    const actual = fromCarsReducers.CarsReducer(state, new fromCarsActions.GetCarDetails(mockCars[0].id));
    expect(actual.selectedCar.id).toBe(mockCars[0].id);
    expect(actual.selectedCar.manufacturer).toBe(mockCars[0].manufacturer);
    expect(actual.selectedCar.price).toBe(mockCars[0].price);
  });
});
