import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/songs.actions';

export interface SongsUiHints {
  sortingBy: string;
}

const initialState: SongsUiHints = {
  sortingBy: 'title'
};

const myReducer = createReducer(
  initialState,
  on(actions.setSongSortOrder, (s, a) => ({ ...s, sortingBy: a.by }))
);

export function reducer(state: SongsUiHints, action: Action): SongsUiHints {
  return myReducer(state, action);
}
