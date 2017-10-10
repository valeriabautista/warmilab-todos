import { Injectable } from '@angular/core';

import { Todo } from './Todo';

@Injectable()
export class TodoService {

  todos: Todo[] = [
    {
      description: 'learn ionic',
      done: false
    }, {
      description: 'perform poc',
      done: true
    }, {
      description: 'go to sleep',
      done: false
    }
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(description: string): Todo[] {
    return this.todos.concat([{description: description, done: false}]);
  }
}
