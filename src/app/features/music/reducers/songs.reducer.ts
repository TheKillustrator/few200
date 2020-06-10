import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/songs.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

// const initialState = adapter.getInitialState();
const initialState: SongState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'Song #1',
      artist: 'Fugazi',
      album: 'Repeater'
    },
    2: {
      id: '2',
      title: 'Ghosteen Speaks',
      artist: 'Nick Cave and the Bad Seeds',
      album: 'Ghosteen'
    }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.addSong, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}
