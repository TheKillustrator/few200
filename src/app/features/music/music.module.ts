import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { SorterComponent } from './components/sorter/sorter.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './effects/song.effects';

@NgModule({
  declarations: [MusicComponent, EntryComponent, ListComponent, SorterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([SongEffects])
  ],
  exports: [
    MusicComponent
  ]
})
export class MusicModule { }
