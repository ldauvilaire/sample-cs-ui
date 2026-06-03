import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BookService } from '../book.service';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions,
              private bookService: BookService) {
  }

  getAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.getAllBooks),
      switchMap(() =>
        this.bookService.getBooks().pipe(
          map(books => BooksActions.getAllBooksSuccess({ books })),
          catchError(error => of(BooksActions.getAllBooksFailure({ error })))
        )
      )
    )
  );
}
