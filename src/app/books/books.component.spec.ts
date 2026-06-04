import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideStore, provideState } from '@ngrx/store';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { BooksComponent } from './books.component';
import { booksReducer } from './state/books.reducers';
import { initialBookState } from './state/book-state';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BooksComponent, LoggerModule.forRoot({ level: NgxLoggerLevel.OFF, serverLogLevel: NgxLoggerLevel.OFF })],
      providers: [
        provideStore(),
        provideState('books', booksReducer, { initialState: () => ({ ...initialBookState }) }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
