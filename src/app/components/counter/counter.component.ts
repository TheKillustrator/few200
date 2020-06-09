import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // current = 0;
  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(s => s.counter.current);
  }

  increment() {
    // this.current += 1;
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    // this.current -= 1;
    this.store.dispatch({ type: 'decrement' });
  }
}
