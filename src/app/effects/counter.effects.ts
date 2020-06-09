import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';

@Injectable() // for some reason, we need this decorator to inject dep here. nowhere else.
export class CounterEffects {

  // logEverything$ = createEffect(() =>
  //   this.action$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ), { dispatch: false }
  // );

  loadCountInterval$ = createEffect(() =>
    this.action$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('interval')), // -> null | '1' | '3' | '5'
      filter(i => i !== null), // -> '1' | '3' | '5'
      map(i => parseInt(i, 10)), // -> 1 | 3 | 5
      map(interval => counterActions.countIntervalSet({ interval })) // aka interval: i
    ), { dispatch: true } // more of a maybe, given the filters
  );

  saveCountInterval$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.countIntervalSet),
      tap(a => localStorage.setItem('interval', a.interval.toString()))
    ), { dispatch: false }
  );

  constructor(private action$: Actions) { }
}
