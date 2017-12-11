import { Action } from '@ngrx/store';

import { Airport } from '../airport.model';

export const GET_ALL_AIRPORTS = '[Airports] Get All';
export const GET_ALL_AIRPORTS_SUCCESS = '[Airports] Get All Success';
export const GET_ALL_AIRPORTS_ERROR = '[Airports] Get All Error';

export class GetAllAirports implements Action {
    readonly type = GET_ALL_AIRPORTS;
}

export class GetAllAirportsSuccess implements Action {
    readonly type = GET_ALL_AIRPORTS_SUCCESS;
    constructor(public payload: Airport[]) { }
}

export class GetAllAirportsError implements Action {
    readonly type = GET_ALL_AIRPORTS_ERROR;
    constructor(public payload: any) { }
}

export type AirportsActions = GetAllAirports | GetAllAirportsSuccess | GetAllAirportsError;
