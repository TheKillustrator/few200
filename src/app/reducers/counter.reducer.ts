import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// Export an interface for TypeScript
export interface CounterState {
  current: number;
}

const intitialState: CounterState = {
  current: 10
};

// Reducer function
// (state, action): state
const myReducer = createReducer(
  intitialState,
  on(actions.countIncremented, (currentState) => ({ current: currentState.current + 1 })),
  on(actions.countDecremented, (currentState) => ({ current: currentState.current - 1 })),
  on(actions.countReset, () => intitialState)
);

export function reducer(state: CounterState = intitialState, action: Action): CounterState {
  return myReducer(state, action);
}
