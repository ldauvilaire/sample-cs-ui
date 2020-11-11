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

import { FieldsetModule } from 'primeng/fieldset';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

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
    TableModule,
    FullCalendarModule,
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
    TableModule,
    FullCalendarModule,
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
