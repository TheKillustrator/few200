import { Action } from '@ngrx/store';

// Export an interface for TypeScript
export interface CounterState {
  current: number;
}

const intitialState: CounterState = {
  current: 10
};

// Reducer function
// (state, action): state
export function reducer(state: CounterState = intitialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    default: {
      return state;
    }
  }
}
