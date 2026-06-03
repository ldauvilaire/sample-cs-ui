import { createReducer, on } from '@ngrx/store';

import { Car, defaultCar } from '../car.model';
import { CarState, initialCarState } from './car-state';
import * as CarsActions from './cars.actions';

export const carsReducer = createReducer(
  initialCarState,
  on(CarsActions.getAllCarsSuccess, (state, { cars }): CarState => ({
    ...state,
    carList: cars,
    isCarListLoaded: true,
    selectedCar: defaultCar,
  })),
  on(CarsActions.getCarDetails, (state, { carId }): CarState => ({
    ...state,
    selectedCar: state.carList.find((c: Car) => c.id === carId) ?? defaultCar,
  }))
);
