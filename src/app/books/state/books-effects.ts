
import {catchError, map, switchMap} from 'rxjs/operators';

import { of as observableOf, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';



import { BookService } from '../book.service';
import * as actions from './books.actions';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions,
              private bookService: BookService) {
  }

  getAllBooksEffects$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.GET_ALL_BOOKS),
      switchMap(() => this.bookService.getBooks()),
      map(bookList => new actions.GetAllBooksSuccess(bookList)),
      catchError(error => of(new actions.GetAllBooksFailure(error)))
    )
  );
}
