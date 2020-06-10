import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MusicState } from '../../reducers';
import * as actions from '../../actions/songs.actions';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
  }

  setSort(by: string) {
    this.store.dispatch(actions.setSongSortOrder({ by }));
  }
}
