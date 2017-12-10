import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource, MatRadioChange } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NGXLogger } from 'ngx-logger';

import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() books$: Observable<Book[]>;
  @Output() bookSelect = new EventEmitter();
  selectedBookId: number;

  booksSubscription: Subscription;

  // DataTable component
  displayedColumns = [ 'selection', 'id', 'name', 'author', 'detail', 'price', 'image' ];
  dataSource: MatTableDataSource<Book>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private logger: NGXLogger) {
    this.logger.info('BooksListComponent:', 'constructor()');

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.logger.info('BooksListComponent:', 'ngOnInit()');

    this.booksSubscription = this.books$.subscribe((data: Book[]) => {
      this.logger.info('BooksListComponent:', 'Received a list of ', data.length, ' books.');
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.logger.info('BooksListComponent:', 'ngAfterViewInit()');
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.logger.info('BooksListComponent:', 'ngOnDestroy()');
    this.booksSubscription.unsubscribe();
  }

  onBookSelected(event: MatRadioChange) {
    this.logger.info('BooksListComponent:', 'onBookSelected()', 'selectedBookId:', this.selectedBookId);
    this.bookSelect.emit(this.selectedBookId);
  }
}
