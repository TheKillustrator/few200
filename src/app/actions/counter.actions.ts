import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[app counter] increment' // this name is merely convention, not a rule
);

export const countDecremented = createAction(
  '[app counter] decrement'
);

export const countReset = createAction(
  '[app counter] reset'
);

export const countIntervalSet = createAction(
  '[app counter] count interval set',
  props<{ interval: number }>()
);
