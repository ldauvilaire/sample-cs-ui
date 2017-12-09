import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  @Input('selectedBookDetails')
  set selectedBookDetails(value) {
    this.book = <Book>value;
  }

  constructor() { }

  ngOnInit() {
  }
}
