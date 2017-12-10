import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { NGXLogger } from 'ngx-logger';

import { Car } from './car.model';

@Injectable()
export class CarService {

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  getCars(): Observable<Car[]> {
    const carsServiceUrl = '/api/data/cars.json';
    const headers = new HttpHeaders();

    return this.http.get<Car[]>(carsServiceUrl, { headers: headers })
      .do(data => {
        this.logger.info('CarService:', 'getCars()', 'Got a list of ', data.length, ' cars');
      });
  }
}
