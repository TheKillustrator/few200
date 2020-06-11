import { BookEntity } from '../reducers/books.reducer';
import { createAction, props } from '@ngrx/store';

let id = 0;

export const addBook = createAction(
  '[books book] book added',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'T' + id++,
      title,
      author,
      format
    } as BookEntity
  })
);

export const setLoanStatus = createAction(
  '[books book] loan status set',
  props<{ id: string, onLoan: boolean }>()
);
