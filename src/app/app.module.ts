import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterStateSnapshot } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { CoreModule } from './core/core.module';
import { appReducers, appMetaReducers } from './core/app-state';
import { RouterEffects } from './core/router.effects';
import { CustomRouterStateSerializer } from './core/router-state';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { CarsModule } from './cars/cars.module';
import { AirportsModule } from './airports/airports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.OFF }),
    StoreModule.forRoot(appReducers, { metaReducers: appMetaReducers }),
    EffectsModule.forRoot([ RouterEffects ]),
    RouterModule.forRoot(
      appRoutes,
      { useHash: true,
        enableTracing: false } // <-- debugging purposes only
    ),
    StoreRouterConnectingModule,
    // Note that you must instrument after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    CoreModule,
    SharedModule,
    HomeModule,
    BooksModule,
    CarsModule,
    AirportsModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
