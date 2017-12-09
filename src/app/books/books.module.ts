import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookService } from './book.service';
import { initialBookState } from './state/book-state';
import { booksReducer } from './state/books.reducers';
import { BooksEffects } from './state/books-effects';

export function getInitialState() {
  return {...initialBookState};
}

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    StoreModule.forFeature('books', booksReducer, { initialState: getInitialState }),
    EffectsModule.forFeature([ BooksEffects ])
  ],
  declarations: [ BooksComponent, BooksListComponent, BookDetailsComponent ],
  providers: [ BookService ]
})
export class BooksModule { }
