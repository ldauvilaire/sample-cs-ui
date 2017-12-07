import * as BooksActions from './books.actions';
import { Book } from '../book.model';

import { BookState, initialBookState } from './book-state';

export function BooksReducer(state = initialBookState, action: BooksActions.BooksActions): BookState {
    let newState: BookState;
    switch (action.type) {
        case BooksActions.GET_ALL_BOOKS_SUCCESS:
            newState = Object.assign({}, state);
            newState.bookList = action.payload;
            newState.isBookListLoaded = true;
            return newState;
        case BooksActions.GET_BOOK_DETAILS:
            newState = Object.assign({}, state);
            newState.selectedBook = getBookDetails(state.bookList, action.payload);
            return newState;
        default:
            return state;
    }
};

function getBookDetails (bookList: Book[], bookId: number) {
    return bookList.find(book =>
        book.id === bookId);
}
