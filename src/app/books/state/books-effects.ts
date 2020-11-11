
import {catchError, map, switchMap} from 'rxjs/operators';

import {of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';



import { BookService } from '../book.service';
import * as actions from './books.actions';

@Injectable()
export class BooksEffects {

  @Effect() getAllBooksEffects$ = this.actions$
    .ofType(actions.GET_ALL_BOOKS).pipe(
    switchMap(() => this.bookService.getBooks().pipe(
      map(bookList => new actions.GetAllBooksSuccess(bookList)
    ),catchError((error) => {
      return observableOf(new actions.GetAllBooksFailure(error));
    }),)
  ));

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) { }
}
