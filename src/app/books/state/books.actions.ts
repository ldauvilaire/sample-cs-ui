import { Action } from '@ngrx/store';

import { Book } from '../book.model';

export const GET_ALL_BOOKS = '[Books] Get All';
export const GET_ALL_BOOKS_SUCCESS = '[Books] Get All Success';
export const GET_ALL_BOOKS_FAILURE = '[Books] Get All Failure';

export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS';

export class GetAllBooks implements Action {
    readonly type = GET_ALL_BOOKS;
}

export class GetAllBooksSuccess implements Action {
    readonly type = GET_ALL_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}

export class GetAllBooksFailure implements Action {
    readonly type = GET_ALL_BOOKS_FAILURE;
    constructor(public payload: any) { }
}

export class GetBookDetails implements Action {
    readonly type = GET_BOOK_DETAILS;
    constructor(public payload: number) { }
}

export type BooksActions = GetAllBooks | GetAllBooksSuccess | GetAllBooksFailure | GetBookDetails;
