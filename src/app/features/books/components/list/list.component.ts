import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: Book[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleLoan(): void {
    console.log('On loan toggled');
  }
}
