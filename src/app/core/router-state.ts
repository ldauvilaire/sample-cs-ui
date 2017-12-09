import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

export interface RouterState {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    const url = routerState.url;
    const queryParams = routerState.root.queryParams;
    return { url, queryParams };
  }
}
