import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoggerModule } from 'ngx-logger';

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
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

import {
  DataTableModule,
  FieldsetModule,
  MessageModule,
  MessagesModule,
  PanelModule,
  RadioButtonModule
} from 'primeng/primeng';
import { SharedModule as PrimeSharedModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoggerModule,
    /* Angular Material */
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule,
    /* PrimeNG */
    PrimeSharedModule,
    DataTableModule,
    FieldsetModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    RadioButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoggerModule,
    /* Angular Material */
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule,
    /* PrimeNG */
    PrimeSharedModule,
    DataTableModule,
    FieldsetModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    RadioButtonModule
  ],
  declarations: []
})
export class CoreModule { }
