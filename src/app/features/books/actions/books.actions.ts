import { BookEntity } from '../reducers/books.reducer';
import { createAction } from '@ngrx/store';

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
