import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { RouterState } from './core/router-state-type';
import * as RouterActions from './core/router.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public store: Store<RouterState>) {}

  public goToHome(): void {
    console.log('Go To Home');
    this.store.dispatch(new RouterActions.Go({
      path: ['/home']
    }));
  }

  public goToBooks(): void {
    console.log('Go To Books');
    this.store.dispatch(new RouterActions.Go({
      path: ['books']
    }));
  }
}
