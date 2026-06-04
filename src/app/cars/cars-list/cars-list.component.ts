import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Observable, Subscription } from 'rxjs';

import { NGXLogger } from 'ngx-logger';

import { Car } from '../car.model';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelModule, TableModule, RadioButtonModule],
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() public cars$!: Observable<Car[]>;
  @Output() public carSelect = new EventEmitter();
  public selectedCarId!: number;

  public carsSubscription!: Subscription;

  constructor(private logger: NGXLogger) {
    this.logger.info('CarsListComponent:', 'constructor()');
  }

  public ngOnInit() {
    this.logger.info('CarsListComponent:', 'ngOnInit()');
    this.carsSubscription = this.cars$.subscribe((data: Car[]) => {
      this.logger.info('CarsListComponent:', 'Received a list of ', data.length, ' cars.');
    });
  }

  public ngAfterViewInit() {
    this.logger.info('CarsListComponent:', 'ngAfterViewInit()');
  }

  public ngOnDestroy() {
    this.logger.info('CarsListComponent:', 'ngOnDestroy()');
    this.carsSubscription.unsubscribe();
  }

  public onCarSelected(_event: unknown) {
    this.logger.info('CarsListComponent:', 'onCarSelected()', 'selectedCarId:', this.selectedCarId);
    this.carSelect.emit(Number(this.selectedCarId));
  }
}
