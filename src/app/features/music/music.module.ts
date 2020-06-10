import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { SorterComponent } from './components/sorter/sorter.component';

@NgModule({
  declarations: [MusicComponent, EntryComponent, ListComponent, SorterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [
    MusicComponent
  ]
})
export class MusicModule { }
