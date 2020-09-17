import { LoadableData } from '../../core/loadable-data.interface';
import { ActionPayload } from '../action-payload.inteface';

// TODO Описать интерфейс хранения результатов поиска
export type AppSearchData = any;
export type AppSearchState = LoadableData<AppSearchData>;
// TODO Описать интерфейс хранения закладок
export type AppBookmarksState = any;

export interface AppState {
  filter: string;
  search: AppSearchState;
  bookmarks: AppBookmarksState;
}

export type AppStateSetFilterPayload = ActionPayload<string>;
export type AppStateLoadSuccessPayload = ActionPayload<any>;
