import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CarDetailsComponent } from './car-details.component';
import { defaultCar } from '../car.model';

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarDetailsComponent, LoggerModule.forRoot({ level: NgxLoggerLevel.OFF, serverLogLevel: NgxLoggerLevel.OFF })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    component.selectedCarDetails = defaultCar;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
