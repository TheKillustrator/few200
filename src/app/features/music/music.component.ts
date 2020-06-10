import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MusicState, selectSongs } from './reducers';
import { Observable } from 'rxjs';
import { Song } from './models';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs$: Observable<Song[]>;
  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.pipe(
      select(selectSongs)
    );
  }
}
