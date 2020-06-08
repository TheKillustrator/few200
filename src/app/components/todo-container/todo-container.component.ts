import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from 'src/app/models';
import { TodoDataService } from 'src/app/services/todo-data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  stuff$: Observable<ShoppingListItem[]>;
  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    this.stuff$ = this.service.getItems();
  }

  addAnItem(description: string) {
    // this.stuff$ = [{ description, completed: false }, ...this.stuff$];
    this.service.addItem(description);
  }
}
