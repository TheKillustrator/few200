import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// Export an interface for TypeScript
export interface CounterState {
  current: number;
  by: number;
}

export const initialState: CounterState = {
  current: 10,
  by: 1
};

// Reducer function
// (state, action): state
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currentState) => ({ ...currentState, current: currentState.current + currentState.by })),
  on(actions.countDecremented, (currentState) => ({ ...currentState, current: currentState.current - currentState.by })),
  on(actions.countReset, () => initialState),
  on(actions.countIntervalSet, (currentState, action) => ({ ...currentState, by: action.interval }))
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}
