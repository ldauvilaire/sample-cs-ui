import * as fromBookActions from './books.actions';
import { mockBooks } from '../../testing/mockdata';

describe('The Books actions', () => {

  it('should return action with type [Books] Get All when getAllBooks is called', () => {
    const actual = fromBookActions.getAllBooks();
    expect(actual.type).toBe('[Books] Get All');
  });

  it('should return action with type [Books] Get All Success and books payload ' +
      'when getAllBooksSuccess is called', () => {
    const actual = fromBookActions.getAllBooksSuccess({ books: mockBooks });
    expect(actual.type).toBe('[Books] Get All Success');
    expect(actual.books).toBe(mockBooks);
  });

  it('should return action with type [Books] Get Details and bookId payload ' +
      'when getBookDetails is called', () => {
    const actual = fromBookActions.getBookDetails({ bookId: mockBooks[0].id });
    expect(actual.type).toBe('[Books] Get Details');
    expect(actual.bookId).toBe(mockBooks[0].id);
  });
});
