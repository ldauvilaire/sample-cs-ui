import { Book, defaultBook } from '../book.model';

export interface BookState {
  bookList: Book[];
  isBookListLoaded: boolean;
  selectedBook: Book;
};
export const initialBookState: BookState = {
  bookList: [],
  isBookListLoaded: false,
  selectedBook: defaultBook
};
