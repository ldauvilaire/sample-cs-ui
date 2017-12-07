import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { RouterEffects } from './core/router.effects';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

import { BooksModule } from './books/books.module';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ routerReducer: routerReducer }),
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
    BooksModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
