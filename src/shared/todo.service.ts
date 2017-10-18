import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Todo } from './Todo';

@Injectable()
export class TodoService {

  todos: Todo[] = [];

  constructor() {

  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(description: string) {

  }

  updateTodo(key: string, todo: Todo) {
    
  }

}
