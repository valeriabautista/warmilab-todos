import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo';

@Pipe({ name: 'filteredTodos', pure: false })
export class FilteredTodos implements PipeTransform {
  transform(allTodos: Todo[], done: boolean) {
    return allTodos;
  }
}
