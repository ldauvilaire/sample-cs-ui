import { createAction, props } from '@ngrx/store';

import { Car } from '../car.model';

export const getAllCars = createAction('[Cars] Get All');
export const getAllCarsSuccess = createAction('[Cars] Get All Success', props<{ cars: Car[] }>());
export const getAllCarsError = createAction('[Cars] Get All Error', props<{ error: any }>());
export const getCarDetails = createAction('[Cars] Get Details', props<{ carId: number }>());
