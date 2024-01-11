import { Component, OnInit } from '@angular/core';
import todos from '../data/todos';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[] = [];
  constructor(private router: Router) {}

  openNewTodo(todoId: number) {
    this.router.navigate(['/todos', todoId]);
  }

  ngOnInit() {
    this.todos = todos;
  }
}
