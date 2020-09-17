import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateRoot } from '../state-root.interface';
import { APP_ACTIONS } from './app-state.actions';
import { AppSearchState } from './app-state.interface';

@Injectable({providedIn: 'root'})
export class AppStateService {

  public readonly filter$: Observable<string> = this.store.pipe(select('app', 'filter'));
  public readonly search$: Observable<AppSearchState> = this.store.pipe(select('app', 'search'));

  constructor(private store: Store<StateRoot>) {
  }

  public setFilter(payload: string): void {
    this.store.dispatch(APP_ACTIONS.setFilter({payload}));
  }
}
