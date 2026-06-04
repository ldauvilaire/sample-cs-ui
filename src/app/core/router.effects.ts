import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as RouterActions from './router.actions';

@Injectable()
export class RouterEffects {

  public navigate$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouterActions.go),
      tap(({ path, query: queryParams, extras }) =>
        this.router.navigate(path as string[], { queryParams, ...extras })
      )
    ),
    { dispatch: false }
  );

  public navigateBack$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouterActions.back),
      tap(() => this.location.back())
    ),
    { dispatch: false }
  );

  public navigateForward$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouterActions.forward),
      tap(() => this.location.forward())
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }
}
