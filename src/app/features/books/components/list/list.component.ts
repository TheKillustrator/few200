import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models';
import { Store } from '@ngrx/store';
import { BookState } from '../../reducers/books.reducer';
import * as actions from '../../actions/books.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: Book[] = [];
  constructor(private store: Store<BookState>) { }

  ngOnInit(): void {
  }

  toggleLoan(id: string, onLoan: boolean) {
    this.store.dispatch(actions.setLoanStatus({ id, onLoan }));
  }
}
