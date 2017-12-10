import * as fromCarsActions from './cars.actions';
import { Car, defaultCar } from '../car.model';

import { CarState, initialCarState } from './car-state';

export function carsReducer(state = initialCarState, action: fromCarsActions.CarsActions): CarState {
    let newState: CarState;
    switch (action.type) {
        case fromCarsActions.GET_ALL_CARS_SUCCESS:
            newState = Object.assign({}, state);
            newState.carList = action.payload;
            newState.isCarListLoaded = true;
            newState.selectedCar = defaultCar;
            return newState;
        case fromCarsActions.GET_CAR_DETAILS:
            newState = Object.assign({}, state);
            newState.selectedCar = getCarDetails(state.carList, action.payload);
            return newState;
        default:
            return state;
    }
}

function getCarDetails(carList: Car[], carId: number) {
    return carList.find(car => car.id == carId);
}
