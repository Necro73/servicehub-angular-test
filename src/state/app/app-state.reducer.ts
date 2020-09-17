import { Action, createReducer, on } from '@ngrx/store';
import { LoadingState } from '../../core/loading-state.enum';
import { APP_ACTIONS } from './app-state.actions';
import { AppState, AppStateLoadSuccessPayload, AppStateSetFilterPayload } from './app-state.interface';

const INITIAL_STATE: AppState = {
  filter: '',
  search: {
    state: LoadingState.init,
    data: undefined
  },
  bookmarks: {}
};

export const APP_STATE_REDUCER = createReducer<AppState>(
  INITIAL_STATE,
  on(
    APP_ACTIONS.setFilter,
    (state: AppState, action: Action & AppStateSetFilterPayload): AppState => ({
      ...state,
      filter: action.payload,
      search: {
        ...state.search,
        state: LoadingState.loading
      }
    })
  ),
  on(
    APP_ACTIONS.loadSuccess,
    (state: AppState, action: Action & AppStateLoadSuccessPayload): AppState => ({
      ...state,
      search: {
        state: LoadingState.success,
        data: action.payload
      }
    })
  )
);
