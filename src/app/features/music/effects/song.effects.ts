import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as songActions from '../actions/songs.actions';
import { SongEntity } from '../reducers/songs.reducer';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class SongEffects {

  baseUrl = 'http://localhost:3000'; // this should really come from environments.ts

  constructor(private actions$: Actions, private http: HttpClient) { }

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.http.get<GetResponse>(this.baseUrl + '/songs')
        .pipe(
          map(response => response.data),
          map(payload => songActions.loadSongsSucceeded({ payload }))
        )
      )
    ), { dispatch: true }
  );
}

interface GetResponse {
  data: SongEntity[];
}
