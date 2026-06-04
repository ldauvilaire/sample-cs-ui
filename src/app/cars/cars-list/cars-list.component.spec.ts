import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CarsListComponent } from './cars-list.component';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarsListComponent, LoggerModule.forRoot({ level: NgxLoggerLevel.OFF, serverLogLevel: NgxLoggerLevel.OFF })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    component.cars$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
