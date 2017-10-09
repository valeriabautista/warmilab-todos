import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from '../../shared/Todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  newTodo: string;

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

  addTodo() {
    this.todos.push({ description: this.newTodo, done: false});
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
