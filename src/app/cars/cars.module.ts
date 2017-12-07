import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent, CarDetailsComponent, CarsListComponent]
})
export class CarsModule { }
