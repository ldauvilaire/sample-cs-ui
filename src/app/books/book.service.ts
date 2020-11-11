
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




import { NGXLogger } from 'ngx-logger';

import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  getBooks(): Observable<Book[]> {
    const booksServiceUrl = '/api/data/books.json';
    const headers = new HttpHeaders();

    return this.http.get<Book[]>(booksServiceUrl, { headers: headers }).pipe(
      tap(data => {
        this.logger.info('BookService:', 'getBooks()', 'Got a list of ', data.length, ' books');
      }));
  }
}
