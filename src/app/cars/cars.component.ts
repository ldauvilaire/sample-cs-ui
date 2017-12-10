import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NGXLogger } from 'ngx-logger';

import { Car, defaultCar } from './car.model';
import { CarState } from './state/car-state';
import * as fromCarsActions from './state/cars.actions';

export const selectCarState = createFeatureSelector<CarState>('cars');
export const selectCarList = createSelector(selectCarState, (state: CarState) => state.carList);
export const selectSelectedCar = createSelector(selectCarState, (state: CarState) => state.selectedCar);

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {

  cars$: Observable<Car[]>;
  carDetails$: Observable<Car>;

  constructor(private store: Store<CarState>, private logger: NGXLogger) {
    this.logger.info('CarsComponent:', 'constructor()');
  }

  ngOnInit() {
    this.logger.info('CarsComponent:', 'ngOnInit()');

    this.cars$ = this.store.select<Car[]>(selectCarList)
    .do((carList: Car[]) => {
      this.logger.info(
        'CarsComponent:',
        'Received a list of', carList.length, 'cars from the store ...');
    });

    this.carDetails$ = this.store.select<Car>(selectSelectedCar)
      .do((selectedCar: Car) => {
        if (selectedCar === defaultCar) {
          this.logger.info('CarsComponent:', 'Received default selected Car from the store ...');
        } else {
          this.logger.info('CarsComponent:', 'Received a selected Car with ID', selectedCar.id, 'from the store ...');
        }
    });

    this.store.dispatch(new fromCarsActions.GetAllCars());
  }

  ngOnDestroy() {
    this.logger.info('CarsComponent:', 'ngOnDestroy()');
  }

  onCarSelected(event: number) {
    this.logger.info('CarsComponent:', 'onCarSelected(' + event + ')');
    this.store.dispatch(new fromCarsActions.GetCarDetails(event));
  }
}
