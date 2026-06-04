import { createAction, props } from '@ngrx/store';

import { Book } from '../book.model';

export const getAllBooks = createAction('[Books] Get All');
export const getAllBooksSuccess = createAction('[Books] Get All Success', props<{ books: Book[] }>());
export const getAllBooksFailure = createAction('[Books] Get All Failure', props<{ error: unknown }>());
export const getBookDetails = createAction('[Books] Get Details', props<{ bookId: number }>());
