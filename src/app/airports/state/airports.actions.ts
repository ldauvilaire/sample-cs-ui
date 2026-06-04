import { createAction, props } from '@ngrx/store';

import { Airport } from '../airport.model';

export const getAllAirports = createAction('[Airports] Get All');
export const getAllAirportsSuccess = createAction('[Airports] Get All Success', props<{ airports: Airport[] }>());
export const getAllAirportsError = createAction('[Airports] Get All Error', props<{ error: unknown }>());
