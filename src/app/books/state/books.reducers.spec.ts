import { Action } from '@ngrx/store';

import { mockBooks } from '../../testing/mockdata';

import * as BooksReducers from './books.reducers';
import * as BooksActions from './books.actions';
import { defaultBook } from '../book.model';

let state: BooksReducers.BookState;

describe('The Books reducer', () => {

  beforeEach(() => {
    state = {
      bookList: [],
      selectedBook: defaultBook,
      isBookListLoaded: false
    };
  });

  fit('should set bookList to empty array and selectedBook to default when ' +
                'BooksActions.GET_ALL_BOOKS is called', () => {

    const actual = BooksReducers.BooksReducer(state, new BooksActions.GetaLLBooks());
    expect(actual.bookList.length).toBe(0);
    expect(actual.selectedBook.id).toBe(defaultBook.id);
    expect(actual.selectedBook.name).toBe(defaultBook.name);
  });

  fit('should set bookList when ' +
            'BooksActions.GetAllBooksSuccess is called', () => {
    const actual = BooksReducers.BooksReducer(state, new BooksActions.GetAllBooksSuccess(mockBooks));
    expect(actual.bookList).toBe(mockBooks);
  });

  fit('should set the selectedBook when ' +
                'BooksActions.GET_BOOK_DETAILS is called with bookId', () => {

    state.bookList = mockBooks;
    const actual = BooksReducers.BooksReducer(state, new BooksActions.GetBookDetails(mockBooks[0].id));
    expect(actual.selectedBook.id).toBe(mockBooks[0].id);
    expect(actual.selectedBook.name).toBe(mockBooks[0].name);
    expect(actual.selectedBook.price).toBe(mockBooks[0].price);
  });
});
