import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoggerModule } from 'ngx-logger';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoggerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoggerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule
  ],
  declarations: []
})
export class CoreModule { }
