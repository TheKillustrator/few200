import { Component, OnInit } from '@angular/core';
import { AppState, selectGetCurrent, selectResetDisabled, selectCountingInterval } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  interval$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.pipe(
      select(selectGetCurrent)
    );
    this.resetDisabled$ = this.store.pipe(
      select(selectResetDisabled)
    );
    this.interval$ = this.store.pipe(
      select(selectCountingInterval)
    );
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }

  setCountInterval(interval: number) {
    this.store.dispatch(actions.countIntervalSet({ interval }));
  }
}
