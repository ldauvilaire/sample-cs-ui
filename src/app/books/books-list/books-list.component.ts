import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { GetBookDetails } from '../state/books.actions';
import { BookState } from '../state/book-state';

import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() booksList: Book[];
  @Output() onBookSelect = new EventEmitter();
  selectedBookId: number;

  // For dump component concept
  // constructor() { }

  constructor(private store: Store<BookState>) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.selectedBookId) {
      this.store.dispatch(new GetBookDetails(this.selectedBookId));

      // For dump component concept
      // this.onBookSelect.emit({bookId: this.selectedBookId});
    }
  }
}
