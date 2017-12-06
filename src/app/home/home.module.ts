import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
