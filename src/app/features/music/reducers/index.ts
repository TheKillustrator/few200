import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSongs from './songs.reducer';
import { Song } from '../models';

export const featureName = 'music';

export interface MusicState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
};

//  1. Feature Selector
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector per branch
const selectSongBranch = createSelector(
  selectMusicFeature,
  f => f.songs
);

// 3. "Helpers"
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongBranch);

// 4. What the components need
export const selectSongs = createSelector(
  selectSongEntityArray, // SongEntity[]
  (songs) => songs as Song[] // Song[] - what the component needs
);
