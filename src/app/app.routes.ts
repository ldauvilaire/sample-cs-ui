import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CarsComponent } from './cars/cars.component';
import { AirportsComponent } from './airports/airports.component';

export const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',
    component: HomeComponent,
    data: { title: 'Sample CS UI - Home' }
  },
  { path: 'books',
    component: BooksComponent,
    data: { title: 'Sample CS UI - Books' }
  },
  { path: 'cars',
    component: CarsComponent,
    data: { title: 'Sample CS UI - Cars' }
  },
  { path: 'airports',
    component: AirportsComponent,
    data: { title: 'Sample CS UI - Airports' }
  }
];
