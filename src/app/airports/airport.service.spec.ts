import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AirportService } from './airport.service';

describe('AirportService', () => {
  let service: AirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggerModule.forRoot({ level: NgxLoggerLevel.OFF, serverLogLevel: NgxLoggerLevel.OFF })],
      providers: [AirportService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
