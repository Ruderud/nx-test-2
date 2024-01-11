import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import todos, { type Todo } from '../data/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todo?: Todo;
  constructor(private params: ActivatedRoute) {}

  ngOnInit() {
    this.todo = todos.find(
      (todo) => todo.id === parseInt(this.params.snapshot.params['todoId'])
    );
  }
}
