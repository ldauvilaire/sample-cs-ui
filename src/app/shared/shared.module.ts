import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

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
