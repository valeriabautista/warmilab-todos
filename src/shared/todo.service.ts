import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Todo } from './Todo';

@Injectable()
export class TodoService {

  todosRef: AngularFireList<Todo>;
  todos: Observable<Todo[]>;

  constructor(public db: AngularFireDatabase) {
    this.todosRef = db.list('todos');
    this.todos = this.todosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getTodos(): Observable<Todo[]> {
    return this.todos;
  }

  addTodo(description: string) {
    this.todosRef.push({description: description, done: false});
  }

  updateTodo(key: string, todo: Todo) {
    this.todosRef.update(key, { description: todo.description, done : todo.done});
  }

}
