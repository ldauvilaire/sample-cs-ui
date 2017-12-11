export interface Airport {
  id: string;
  name: string;
  city: string;
  country: string;
  iata: string;
  icao: string;
  latitude: string;
  longitude: string;
  altitude: string;
  timezone: string;
  dst: string;
  tz: string;
}
export const defaultAirport = {
  id: '',
  name: '',
  city: '',
  country: '',
  iata: '',
  icao: '',
  latitude: '',
  longitude: '',
  altitude: '',
  timezone: '',
  dst: '',
  tz: ''
};
