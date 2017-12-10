import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NGXLogger } from 'ngx-logger';

import { Book, defaultBook } from './book.model';
import { BookState } from './state/book-state';
import * as fromBooksActions from './state/books.actions';

export const selectBookState = createFeatureSelector<BookState>('books');
export const selectBookList = createSelector(selectBookState, (state: BookState) => state.bookList);
export const selectSelectedBook = createSelector(selectBookState, (state: BookState) => state.selectedBook);

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books$: Observable<Book[]>;
  bookDetails$: Observable<Book>;

  constructor(private store: Store<BookState>, private logger: NGXLogger) {
  }

  ngOnInit() {
    this.logger.info('BooksComponent:', 'ngOnInit()', '...');

    this.books$ = this.store.select<Book[]>(selectBookList)
      .do((bookList: Book[]) => {
        this.logger.info(
          'BooksComponent:',
          'Received a list of', bookList.length, 'books from the store ...');
      });

    this.bookDetails$ = this.store.select<Book>(selectSelectedBook)
      .do((selectedBook: Book) => {
        if (selectedBook === defaultBook) {
          this.logger.info('BooksComponent:', 'Received default selected Book from the store ...');
        } else {
          this.logger.info('BooksComponent:', 'Received a selected Book with ID', selectedBook.id, 'from the store ...');
        }
    });

    this.store.dispatch(new fromBooksActions.GetAllBooks());
  }

  ngOnDestroy() {
    this.logger.info('BooksComponent:', 'ngOnDestroy()', '...');
  }

  onBookSelected(event: number) {
    this.logger.info('BooksComponent:', 'onBookSelected(', event, ')');
    this.store.dispatch(new fromBooksActions.GetBookDetails(event));
  }
}
