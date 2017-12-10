import { Component, OnInit, Input } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

import { Car } from '../car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: Car;

  @Input('selectedCarDetails')
  set selectedCarDetails(value) {
    if (value.id === -1) {
      this.logger.info('CarDetailsComponent:', 'selectedCarDetails()', 'Received a empty car details');
    } else {
      this.logger.info('CarDetailsComponent:', 'selectedCarDetails()', 'Received a car details with ID', value.id);
    }
    this.car = <Car>value;
  }

  constructor(private logger: NGXLogger) {
    this.logger.info('CarDetailsComponent:', 'constructor()');
  }

  ngOnInit() {
    this.logger.info('CarDetailsComponent:', 'ngOnInit()');
  }
}
