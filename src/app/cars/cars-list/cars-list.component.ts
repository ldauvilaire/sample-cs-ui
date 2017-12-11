import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NGXLogger } from 'ngx-logger';

import { Car } from '../car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() cars$: Observable<Car[]>;
  @Output() carSelect = new EventEmitter();
  selectedCarId: number;

  carsSubscription: Subscription;

  constructor(private logger: NGXLogger) {
    this.logger.info('CarsListComponent:', 'constructor()');
  }

  ngOnInit() {
    this.logger.info('CarsListComponent:', 'ngOnInit()');

    this.carsSubscription = this.cars$.subscribe((data: Car[]) => {
      this.logger.info('CarsListComponent:', 'Received a list of ', data.length, ' cars.');
    });
  }

  ngAfterViewInit() {
    this.logger.info('CarsListComponent:', 'ngAfterViewInit()');
  }

  ngOnDestroy() {
    this.logger.info('CarsListComponent:', 'ngOnDestroy()');
    this.carsSubscription.unsubscribe();
  }

  onCarSelected(event: any) {
    this.logger.info('CarsListComponent:', 'onCarSelected()', 'selectedCarId:', this.selectedCarId);
    this.carSelect.emit(Number(this.selectedCarId));
  }
}
