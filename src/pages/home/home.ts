import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from '../../shared/Todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  newTodo: string = null;

  done: boolean;

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

  addTodo(todo: string) {
    if (todo === null) return;
    this.todos.push({ description: todo, done: false});
    this.newTodo = null;
  }

  showDone() {
    this.done = true;
  }

  showPending() {
    this.done = false;
  }

  showAll() {
    this.done = null;
  }

}
