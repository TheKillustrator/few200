import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [MusicComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MusicComponent
  ]
})
export class MusicModule { }
