
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




import { NGXLogger } from 'ngx-logger';

import { Airport } from './airport.model';

@Injectable()
export class AirportService {

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  public getAirports(): Observable<Airport[]> {
    const airportsServiceUrl = '/assets/data/airports.json';
    const headers = new HttpHeaders();

    return this.http.get<Airport[]>(airportsServiceUrl, { headers: headers }).pipe(
      tap(data => {
        this.logger.info('AirportService:', 'getAirports()', 'Got a list of ', data.length, ' airports');
      }));
  }
}
