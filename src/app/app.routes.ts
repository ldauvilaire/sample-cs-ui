import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

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
  }
];
