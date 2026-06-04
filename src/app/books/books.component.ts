import { tap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NGXLogger } from 'ngx-logger';

import { Book, defaultBook } from './book.model';
import { BookState } from './state/book-state';
import * as BooksActions from './state/books.actions';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const selectBookState = createFeatureSelector<BookState>('books');
export const selectBookList = createSelector(selectBookState, (state: BookState) => state.bookList);
export const selectSelectedBook = createSelector(selectBookState, (state: BookState) => state.selectedBook);

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, MatChipsModule, BooksListComponent, BookDetailsComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  public books$!: Observable<Book[]>;
  public bookDetails$!: Observable<Book>;

  constructor(private store: Store<BookState>, private logger: NGXLogger) {
  }

  public ngOnInit() {
    this.logger.info('BooksComponent:', 'ngOnInit()', '...');

    this.books$ = this.store.select<Book[]>(selectBookList).pipe(
      tap((bookList: Book[]) => {
        this.logger.info('BooksComponent:', 'Received a list of', bookList.length, 'books from the store ...');
      }));

    this.bookDetails$ = this.store.select<Book>(selectSelectedBook).pipe(
      tap((selectedBook: Book) => {
        if (selectedBook === defaultBook) {
          this.logger.info('BooksComponent:', 'Received default selected Book from the store ...');
        } else {
          this.logger.info('BooksComponent:', 'Received a selected Book with ID', selectedBook.id, 'from the store ...');
        }
      }));

    this.store.dispatch(BooksActions.getAllBooks());
  }

  public ngOnDestroy() {
    this.logger.info('BooksComponent:', 'ngOnDestroy()', '...');
  }

  public onBookSelected(event: number) {
    this.logger.info('BooksComponent:', 'onBookSelected(', event, ')');
    this.store.dispatch(BooksActions.getBookDetails({ bookId: event }));
  }
}
