import { Action } from '@ngrx/store';

import { Car } from '../car.model';

export const GET_ALL_CARS = '[Cars] Get All';
export const GET_ALL_CARS_SUCCESS = '[Cars] Get All Success';
export const GET_ALL_CARS_ERROR = '[Cars] Get All Error';

export const GET_CAR_DETAILS = '[Cars] Get Details';

export class GetAllCars implements Action {
    readonly type = GET_ALL_CARS;
}

export class GetAllCarsSuccess implements Action {
    readonly type = GET_ALL_CARS_SUCCESS;
    constructor(public payload: Car[]) { }
}

export class GetAllCarsError implements Action {
    readonly type = GET_ALL_CARS_ERROR;
    constructor(public payload: any) { }
}

export class GetCarDetails implements Action {
    readonly type = GET_CAR_DETAILS;
    constructor(public payload: number) { }
}

export type CarsActions = GetAllCars | GetAllCarsSuccess | GetAllCarsError | GetCarDetails;
