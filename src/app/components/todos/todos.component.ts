import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos?: Todo[];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        title: 'Hello',
        isCompleted: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos?.map((v, i) => {
      if (i == id) v.isCompleted = !v.isCompleted;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  addTodo() {
    if (this.inputTodo.trim().length > 0) {
      this.todos?.push({
        title: this.inputTodo,
        isCompleted: false,
      });
    }

    this.inputTodo = '';
  }
}
