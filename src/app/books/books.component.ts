import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from './book.model';
import { BookState } from './state/book-state';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  bookDetails: Book;

  constructor(private store: Store<BookState>) {
  }

  ngOnInit() {
    this.store.select(state => state)
      .subscribe((bState) => {
        this.books = bState.bookList;
        this.bookDetails = bState.selectedBook;
    });
  }

  // For dump component concept
  // onBookSelected(event) {
  //     this.store.dispatch(new GetBookDetails(event.bookId));
  // }
}
