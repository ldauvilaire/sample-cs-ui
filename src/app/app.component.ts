import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RouterActions from './core/router.actions';
import { State } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public store: Store<State>) {}

  public goToHome(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['']
    }));
  }
}
