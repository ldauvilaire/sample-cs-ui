import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { NGXLogger } from 'ngx-logger';

import { AppState } from './core/app-state';
import { go } from './core/router.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public store: Store<AppState>, private logger: NGXLogger) {}

  public goToHome(): void {
    this.logger.info('Go To', 'Home');
    this.store.dispatch(go({ path: ['/home'] }));
  }

  public goToBooks(): void {
    this.logger.info('Go To', 'Books');
    this.store.dispatch(go({ path: ['books'] }));
  }

  public goToCars(): void {
    this.logger.info('Go To', 'Cars');
    this.store.dispatch(go({ path: ['cars'] }));
  }

  public goToAirports(): void {
    this.logger.info('Go To', 'Airports');
    this.store.dispatch(go({ path: ['airports'] }));
  }
}
