import { createAction, props } from '@ngrx/store';
import { AppStateLoadSuccessPayload, AppStateSetFilterPayload } from './app-state.interface';

const setFilter = createAction(
  'APP_STATE/SET_FILTER',
  props<AppStateSetFilterPayload>()
);

const loadSuccess = createAction(
  'APP_STATE/LOAD_SUCCESS',
  props<AppStateLoadSuccessPayload>()
);

export const APP_ACTIONS = {
  setFilter,
  loadSuccess
};
