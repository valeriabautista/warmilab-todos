import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

class Todo {
  description: string;
  done: boolean;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  newTodo: string;

  filteredTodos: Todo[] = [];

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

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.showAll();
  }

  addTodo() {
    this.todos.push({ description: this.newTodo, done: false});
    this.newTodo = null;
  }

  showDone() {
    this.filteredTodos = this.todos.filter(t => t.done === true);
  }

  showPending() {
    this.filteredTodos = this.todos.filter(t => t.done === false);
  }

  showAll() {
    this.filteredTodos = this.todos;
  }

}
