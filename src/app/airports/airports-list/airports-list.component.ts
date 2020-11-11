import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { Observable ,  Subscription } from 'rxjs';

import { NGXLogger } from 'ngx-logger';

import { Airport } from '../airport.model';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css']
})
export class AirportsListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() airports$: Observable<Airport[]>;

  columns = [
    { name: 'ID', maxWidth: 60 },
    { name: 'Name', cellClass: 'sample-lightblue' },
    { name: 'City' },
    { name: 'Country' },
    { name: 'IATA', maxWidth: 60 },
    { name: 'ICAO', maxWidth: 60 },
    { name: 'Latitude', maxWidth: 100 },
    { name: 'Longitude', maxWidth: 100 },
    { name: 'Altitude', maxWidth: 75 },
    { name: 'Timezone', maxWidth: 90 },
    { name: 'DST', maxWidth: 60 },
    { name: 'TZ' }
  ];

  airportsSubscription: Subscription;

  constructor(private logger: NGXLogger) {
    this.logger.info('AirportsListComponent:', 'constructor()');
  }

  ngOnInit() {
    this.logger.info('AirportsListComponent:', 'ngOnInit()');

    this.airportsSubscription = this.airports$.subscribe((data: Airport[]) => {
      this.logger.info('AiportsListComponent:', 'Received a list of ', data.length, ' airports.');
    });
  }

  ngAfterViewInit() {
    this.logger.info('AirportsListComponent:', 'ngAfterViewInit()');
  }

  ngOnDestroy() {
    this.logger.info('AirportsListComponent:', 'ngOnDestroy()');
    this.airportsSubscription.unsubscribe();
  }
}
