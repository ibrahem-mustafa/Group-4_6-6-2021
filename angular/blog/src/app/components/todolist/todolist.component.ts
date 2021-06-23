import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor(private todosService: TodoService) {}

  ngOnInit(): void { }

  get todos() {
    return this.todosService.todos;
  }

  /**deleteTodo(id: number) {
    this.todosService.todos = this.todos.filter((todo) => todo.id != id);
  }

  addTodo(title: string) {
    this.todos.push({
      userId: 345354,
      id: 2,
      title,
      completed: false,
    });
  }*/
}
