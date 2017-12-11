import { Airport, defaultAirport } from '../airport.model';

export interface AirportState {
  airportList: Airport[];
  isAirportListLoaded: boolean;
}
export const initialAirportState: AirportState = {
  airportList: [],
  isAirportListLoaded: false,
};
