import * as BookActions from './books.actions';
import { mockBooks } from '../../testing/mockdata';

describe('The Books actions', () => {

  fit('should return action with type:GET_ALL_BOOKS when getBooks is called', () => {
    const actual = new BookActions.GetAllBooks();
    expect(actual.type).toBe(BookActions.GET_ALL_BOOKS);
  });

  fit('should return action with type:GET_ALL_BOOKS_SUCCESS and payload:BooksList ' +
                ' when getBooksSuccess is called', () => {

    const actual = new BookActions.GetAllBooksSuccess(mockBooks);
    expect(actual.type).toBe(BookActions.GET_ALL_BOOKS_SUCCESS)
    expect(actual.payload).toBe(mockBooks);
  });

  fit('should return action with type:GET_BOOK_DETAILS and payload: bookId ' +
           ' when getBookDetails is called', () => {

    const actual = new BookActions.GetBookDetails(mockBooks[0].id);
    expect(actual.type).toBe(BookActions.GET_BOOK_DETAILS);
    expect(actual.payload).toBe(mockBooks[0].id);
  });
});
