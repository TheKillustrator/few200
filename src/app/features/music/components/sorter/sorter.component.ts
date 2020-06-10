import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MusicState, selectSortingSongsBy } from '../../reducers';
import * as actions from '../../actions/songs.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  by$: Observable<string>;
  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.by$ = this.store.pipe(
      select(selectSortingSongsBy)
    );
  }

  setSort(by: string) {
    this.store.dispatch(actions.setSongSortOrder({ by }));
  }
}
