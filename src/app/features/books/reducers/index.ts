import * as fromBooks from './books.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../models';

export const featureName = 'books';

export interface BookState {
  books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<BookState> = {
  books: fromBooks.reducer
};

//  1. Feature Selector
const selectBooksFeature = createFeatureSelector<BookState>(featureName);

// 2. Selector per branch
const selectBooksBranch = createSelector(
  selectBooksFeature,
  f => f.books
);

// 3. "Helpers"
const { selectAll: selectBookEntityArray } = fromBooks.adapter.getSelectors(selectBooksBranch);

// 4. What the components need
export const selectBooks = createSelector(
  selectBookEntityArray, // BookEntity[]
  (books) => books as Book[] // Book[] - what the component needs
);
