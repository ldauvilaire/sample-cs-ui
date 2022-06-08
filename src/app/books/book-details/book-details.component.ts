import { Component, OnInit, Input } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  @Input()
  set selectedBookDetails(value) {
    if (value.id === -1) {
      this.logger.info('BookDetailsComponent:', 'selectedBookDetails()', 'Received a empty book details');
    } else {
      this.logger.info('BookDetailsComponent:', 'selectedBookDetails()', 'Received a book details with ID', value.id);
    }
    this.book = <Book>value;
  }

  constructor(private logger: NGXLogger) {
    this.logger.info('BookDetailsComponent:', 'constructor()');
  }

  ngOnInit() {
    this.logger.info('BookDetailsComponent:', 'ngOnInit()');
  }
}
