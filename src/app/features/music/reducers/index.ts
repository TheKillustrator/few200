import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSongs from './songs.reducer';
import * as fromSongsUiHints from './songs-ui-hints.reducer';
import { Song } from '../models';

export const featureName = 'music';

export interface MusicState {
  songs: fromSongs.SongState;
  songsUiHints: fromSongsUiHints.SongsUiHints;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer,
  songsUiHints: fromSongsUiHints.reducer
};

//  1. Feature Selector
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector per branch
const selectSongBranch = createSelector(
  selectMusicFeature,
  f => f.songs
);

const selectSongUiHintsBranch = createSelector(
  selectMusicFeature,
  f => f.songsUiHints
);

// 3. "Helpers"
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongBranch);

// 4. What the components need
const selectSongsUnsorted = createSelector(
  selectSongEntityArray, // SongEntity[]
  (songs) => songs as Song[] // Song[] - what the component needs
);

export const selectSortingSongsBy = createSelector(
  selectSongUiHintsBranch,
  b => b.sortingBy
);

export const selectSongs = createSelector(
  selectSongsUnsorted,
  selectSortingSongsBy,
  (songs, by) => {
    // return a new array using spread operator to make SURE we see new change
    return [...songs.sort((lhs, rhs) => {
      // bracket notation only works because we chose strings that match field names
      if (lhs[by].toLowerCase() < rhs[by].toLowerCase()) {
        return -1;
      }
      if (lhs[by].toLowerCase() > rhs[by].toLowerCase()) {
        return 1;
      }
      return 0;
    })];
  }
);
