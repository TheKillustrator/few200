import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface BookState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
const initialState: BookState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'The Fifth Season',
      author: 'N. K. Jemisin',
      format: 'audiobook'
    },
    2: {
      id: '2',
      title: 'Dawn',
      author: 'Octavia Butler',
      format: 'ebook'
    }
  }
};
const reducerFunction = createReducer(
  initialState
);

export function reducer(state: BookState = initialState, action: Action) {
  return reducerFunction(state, action);
}
