import { mockBooks } from '../../testing/mockdata';

import { defaultBook } from '../book.model';

import { BookState } from './book-state';
import * as fromBooksReducers from './books.reducers';
import * as fromBooksActions from './books.actions';

let state: BookState;

describe('The Books reducer', () => {

  beforeEach(() => {
    state = {
      bookList: [],
      selectedBook: defaultBook,
      isBookListLoaded: false
    };
  });

  it('should set bookList to empty array and selectedBook to default when getAllBooks is called', () => {
    const actual = fromBooksReducers.booksReducer(state, fromBooksActions.getAllBooks());
    expect(actual.bookList.length).toBe(0);
    expect(actual.selectedBook.id).toBe(defaultBook.id);
    expect(actual.selectedBook.name).toBe(defaultBook.name);
  });

  it('should set bookList when getAllBooksSuccess is called', () => {
    const actual = fromBooksReducers.booksReducer(state, fromBooksActions.getAllBooksSuccess({ books: mockBooks }));
    expect(actual.bookList).toBe(mockBooks);
  });

  it('should set the selectedBook when getBookDetails is called with bookId', () => {
    state.bookList = mockBooks;
    const actual = fromBooksReducers.booksReducer(state, fromBooksActions.getBookDetails({ bookId: mockBooks[0].id }));
    expect(actual.selectedBook.id).toBe(mockBooks[0].id);
    expect(actual.selectedBook.name).toBe(mockBooks[0].name);
    expect(actual.selectedBook.price).toBe(mockBooks[0].price);
  });
});
