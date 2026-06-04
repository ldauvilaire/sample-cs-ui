import { Component, OnInit, OnDestroy, Input, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule, SortType, DatatableRowDetailDirective } from '@swimlane/ngx-datatable';
import { Observable, Subscription } from 'rxjs';

import { NGXLogger } from 'ngx-logger';

import { Airport } from '../airport.model';

@Component({
  selector: 'app-airports-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, NgxDatatableModule],
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css']
})
export class AirportsListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() public airports$!: Observable<Airport[]>;
  @ViewChild(DatatableRowDetailDirective) public rowDetail!: DatatableRowDetailDirective;

  public sortType = SortType.single;
  public airportsSubscription!: Subscription;

  constructor(private logger: NGXLogger) {
    this.logger.info('AirportsListComponent:', 'constructor()');
  }

  public ngOnInit() {
    this.logger.info('AirportsListComponent:', 'ngOnInit()');
    this.airportsSubscription = this.airports$.subscribe((data: Airport[]) => {
      this.logger.info('AiportsListComponent:', 'Received a list of ', data.length, ' airports.');
    });
  }

  public ngAfterViewInit() {
    this.logger.info('AirportsListComponent:', 'ngAfterViewInit()');
  }

  public ngOnDestroy() {
    this.logger.info('AirportsListComponent:', 'ngOnDestroy()');
    this.airportsSubscription.unsubscribe();
  }

  public toggleRowDetail(row: Airport) {
    this.rowDetail.toggleExpandRow(row);
  }
}
