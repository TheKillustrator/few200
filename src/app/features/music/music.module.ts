import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';



@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MusicComponent
  ]
})
export class MusicModule { }
