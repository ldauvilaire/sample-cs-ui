import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule
  ],
  declarations: []
})
export class SharedModule { }
