import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { NGXLogger } from 'ngx-logger';

import { Airport } from './airport.model';

@Injectable()
export class AirportService {

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  getAirports(): Observable<Airport[]> {
    const airportsServiceUrl = '/api/data/airports.json';
    const headers = new HttpHeaders();

    return this.http.get<Airport[]>(airportsServiceUrl, { headers: headers })
      .do(data => {
        this.logger.info('AirportService:', 'getAirports()', 'Got a list of ', data.length, ' airports');
      });
  }
}
