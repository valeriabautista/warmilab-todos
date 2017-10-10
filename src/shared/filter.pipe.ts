import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo';

@Pipe({ name: 'filteredTodos', pure: false })
export class FilteredTodos implements PipeTransform {
  transform(allTodos: Todo[], done: boolean) {
    if (allTodos === null) return [];
    if (done === null) return allTodos;
    return allTodos.filter(t => t.done === done);
  }
}
