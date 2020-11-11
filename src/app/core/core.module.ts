import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoggerModule } from 'ngx-logger';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkTableModule } from '@angular/cdk/table';

import {
  FieldsetModule,
  MessageModule,
  MessagesModule,
  PanelModule,
  RadioButtonModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { SharedModule as PrimeSharedModule } from 'primeng/primeng';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
    TableModule,
    FieldsetModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    RadioButtonModule,
    /* Ngx Datatable */
    NgxDatatableModule
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
    TableModule,
    FieldsetModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    RadioButtonModule,
    /* Ngx Datatable */
    NgxDatatableModule
  ],
  declarations: []
})
export class CoreModule { }
