import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookState } from '../../reducers/books.reducer';
import { Store } from '@ngrx/store';
import { addBook } from '../../actions/books.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  bookForm: FormGroup;
  formats: any = ['Hardcover', 'Paperback', 'Ebook', 'Audiobook'];
  constructor(private builder: FormBuilder, private store: Store<BookState>) { }

  ngOnInit(): void {
    this.bookForm = this.builder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      format: ['', Validators.required]
    });
  }

  get title() {
    return this.bookForm.get('title');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get format() {
    return this.bookForm.get('format');
  }

  submit(element: HTMLInputElement) {
    this.store.dispatch(addBook(this.bookForm.value));
    this.bookForm.reset();
    element.focus();
  }
}
