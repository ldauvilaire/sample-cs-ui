import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, RouterStateSerializer } from '@ngrx/router-store';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';
import { appReducers, appMetaReducers } from './app/core/app-state';
import { RouterEffects } from './app/core/router.effects';
import { BooksEffects } from './app/books/state/books-effects';
import { CarsEffects } from './app/cars/state/cars-effects';
import { AirportsEffects } from './app/airports/state/airports-effects';
import { booksReducer } from './app/books/state/books.reducers';
import { carsReducer } from './app/cars/state/cars.reducers';
import { airportsReducer } from './app/airports/state/airports.reducers';
import { initialBookState } from './app/books/state/book-state';
import { initialCarState } from './app/cars/state/car-state';
import { initialAirportState } from './app/airports/state/airport-state';
import { CustomRouterStateSerializer } from './app/core/router-state';
import { BookService } from './app/books/book.service';
import { CarService } from './app/cars/car.service';
import { AirportService } from './app/airports/airport.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(appReducers, { metaReducers: appMetaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    provideState('books', booksReducer, { initialState: () => ({ ...initialBookState }) }),
    provideState('cars', carsReducer, { initialState: () => ({ ...initialCarState }) }),
    provideState('airports', airportsReducer, { initialState: () => ({ ...initialAirportState }) }),
    provideEffects([RouterEffects, BooksEffects, CarsEffects, AirportsEffects]),
    provideRouterStore(),
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    importProvidersFrom(
      LoggerModule.forRoot({
        serverLoggingUrl: '/api/logs',
        level: NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.OFF,
      })
    ),
    providePrimeNG({ theme: { preset: Aura } }),
    BookService,
    CarService,
    AirportService,
  ],
}).catch((err) => console.error(err));
