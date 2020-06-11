import { Component, OnInit } from '@angular/core';
import { BookState } from './reducers/books.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './models';
import { selectBooks } from './reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  constructor(private store: Store<BookState>) { }

  ngOnInit(): void {
    this.books$ = this.store.pipe(
      select(selectBooks)
    );
  }

}
