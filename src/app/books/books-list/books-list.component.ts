import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatRadioModule, MatRadioChange } from '@angular/material/radio';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

import { NGXLogger } from 'ngx-logger';

import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatIconModule, MatPaginatorModule, MatRadioModule, MatTableModule],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() public books$!: Observable<Book[]>;
  @Output() public bookSelect = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) public paginator!: MatPaginator;
  public selectedBookId!: number;
  public booksSubscription!: Subscription;
  public displayedColumns = ['selection', 'id', 'name', 'author', 'detail', 'price', 'image'];
  public dataSource: MatTableDataSource<Book>;

  constructor(private logger: NGXLogger) {
    this.logger.info('BooksListComponent:', 'constructor()');
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
  }

  public ngOnInit() {
    this.logger.info('BooksListComponent:', 'ngOnInit()');
    this.booksSubscription = this.books$.subscribe((data: Book[]) => {
      this.logger.info('BooksListComponent:', 'Received a list of ', data.length, ' books.');
      this.dataSource.data = data;
    });
  }

  public ngAfterViewInit() {
    this.logger.info('BooksListComponent:', 'ngAfterViewInit()');
    this.dataSource.paginator = this.paginator;
  }

  public ngOnDestroy() {
    this.logger.info('BooksListComponent:', 'ngOnDestroy()');
    this.booksSubscription.unsubscribe();
  }

  public onBookSelected(_event: MatRadioChange) {
    this.logger.info('BooksListComponent:', 'onBookSelected()', 'selectedBookId:', this.selectedBookId);
    this.bookSelect.emit(Number(this.selectedBookId));
  }
}
