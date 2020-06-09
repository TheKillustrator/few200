import * as fromCounter from './counter.reducer';
import { from } from 'rxjs';

// Create an interface that describes (for TypeScript) the application state
export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};
