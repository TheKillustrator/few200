import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() items: ShoppingListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  markComplete(item: ShoppingListItem) {
    item.completed = true;
  }
}
