///<reference path="../../../node_modules/@angular/common/http/src/headers.d.ts"/>
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { NGXLogger } from 'ngx-logger';

import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  getBooks(): Observable<Book[]> {
    const booksServiceUrl = 'assets/data/books.json';
    const headers = new HttpHeaders();

    return this.http.get<Book[]>(booksServiceUrl, { headers: headers })
      .do(data => {
        this.logger.info('BookService:', 'Got a list of ', data.length, ' books');
      });
  }
}
