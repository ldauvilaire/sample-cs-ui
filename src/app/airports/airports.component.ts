import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NGXLogger } from 'ngx-logger';

import { Airport, defaultAirport } from './airport.model';
import { AirportState } from './state/airport-state';
import * as fromAirportsActions from './state/airports.actions';

export const selectAirportState = createFeatureSelector<AirportState>('airports');
export const selectAirportList = createSelector(selectAirportState, (state: AirportState) => state.airportList);

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit, OnDestroy {

  airports$: Observable<Airport[]>;

  constructor(private store: Store<AirportState>, private logger: NGXLogger) {
    this.logger.info('AirportsComponent:', 'constructor()');
  }

  ngOnInit() {
    this.logger.info('AirportsComponent:', 'ngOnInit()');

    this.airports$ = this.store.select<Airport[]>(selectAirportList)
        .do((airportList: Airport[]) => {
          this.logger.info(
            'AirportsComponent:',
            'Received a list of', airportList.length, 'airport from the store ...');
        });

    this.store.dispatch(new fromAirportsActions.GetAllAirports());
  }

  ngOnDestroy() {
    this.logger.info('AirportsComponent:', 'ngOnDestroy()');
  }
}
