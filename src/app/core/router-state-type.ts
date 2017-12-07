import { RouterStateSnapshot } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export type RouterState = RouterReducerState<RouterStateSnapshot>;
