import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NGXLogger } from 'ngx-logger';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book!: Book;

  constructor(private logger: NGXLogger) {
    this.logger.info('BookDetailsComponent:', 'constructor()');
  }

  @Input()
  public set selectedBookDetails(value: Book) {
    if (value.id === -1) {
      this.logger.info('BookDetailsComponent:', 'selectedBookDetails()', 'Received a empty book details');
    } else {
      this.logger.info('BookDetailsComponent:', 'selectedBookDetails()', 'Received a book details with ID', value.id);
    }
    this.book = <Book>value;
  }

  public ngOnInit() {
    this.logger.info('BookDetailsComponent:', 'ngOnInit()');
  }
}
