import {Effect} from '@ngrx/effects';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';
import {ActivatedRouteSnapshot} from '@angular/router';
import {of} from 'rxjs/observable/of';

class TalksEffects {
  @Effect() navigateToTalks = this.actions.ofType(ROUTER_NAVIGATION)
    .map(firstSegment)
    .filter(s => s.routeConfig.path === talks)
    .switchMap((r: ActivatedRouteSnapshot) => {
      const filters = createFilters(r.params);
      return this.backend.findTalks(filters)
        .map(resp => ({ type: 'TALKS_UPDATED', payload: {...resp, filters}}))
    })
    .catch(e => {
      console.log('Network error', e);
      return of();
    });
}
