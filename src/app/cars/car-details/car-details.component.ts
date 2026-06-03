import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

import { NGXLogger } from 'ngx-logger';

import { Car } from '../car.model';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, PanelModule, InputTextModule],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car!: Car;

  @Input()
  set selectedCarDetails(value: Car) {
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
