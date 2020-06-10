import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicState } from '../../reducers';
import { Store } from '@ngrx/store';
import { addSong } from '../../actions/songs.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  songForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      artist: ['', [Validators.required, Validators.maxLength(50)]],
      album: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  get title() {
    return this.songForm.get('title');
  }
  get artist() {
    return this.songForm.get('artist');
  }
  get album() {
    return this.songForm.get('album');
  }

  submit(myFocus: HTMLInputElement) {
    this.store.dispatch(addSong(this.songForm.value));
    this.songForm.reset();
    myFocus.focus();
  }
}
