import { ShoppingListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

export class TodoDataService {

  private items: ShoppingListItem[] = [
    { description: 'Build Trampoline', completed: false },
    { description: 'Show Violet how to use IMovie', completed: false }
  ];

  private subject = new BehaviorSubject<ShoppingListItem[]>(this.items);
  getItems(): Observable<ShoppingListItem[]> {
    return this.subject.asObservable();
  }

  addItem(description: string) {
    this.items = [{ description, completed: false }, ...this.items]; // state is immutable, so we reassign to new array
    this.subject.next(this.items);
  }
}
