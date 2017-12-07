import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { BookService } from '../book.service';
import * as actions from './books.actions';

@Injectable()
export class BooksEffects {

  @Effect() getAllBooksEffects$ = this.actions$
    .ofType(actions.GET_ALL_BOOKS)
    .switchMap(() => this.bookService.getBooks()
    .map(bookList => new actions.GetAllBooksSuccess(bookList))
    .catch((error) => {
      return Observable.of(new actions.GetAllBooksFailure(error));
    })
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) { }
}
