import { createReducer, on } from '@ngrx/store';

import { Book, defaultBook } from '../book.model';
import { BookState, initialBookState } from './book-state';
import * as BooksActions from './books.actions';

export const booksReducer = createReducer(
  initialBookState,
  on(BooksActions.getAllBooksSuccess, (state, { books }): BookState => ({
    ...state,
    bookList: books,
    isBookListLoaded: true,
    selectedBook: defaultBook,
  })),
  on(BooksActions.getBookDetails, (state, { bookId }): BookState => ({
    ...state,
    selectedBook: state.bookList.find((b: Book) => b.id === bookId) ?? defaultBook,
  }))
);
