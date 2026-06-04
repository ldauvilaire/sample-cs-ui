import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AirportsListComponent } from './airports-list.component';

describe('AirportsListComponent', () => {
  let component: AirportsListComponent;
  let fixture: ComponentFixture<AirportsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AirportsListComponent, LoggerModule.forRoot({ level: NgxLoggerLevel.OFF, serverLogLevel: NgxLoggerLevel.OFF })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsListComponent);
    component = fixture.componentInstance;
    component.airports$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
