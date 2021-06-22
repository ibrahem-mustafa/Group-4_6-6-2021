import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todos = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 345354,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 67575,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 9789789,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 123412,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id != id)
  }
}
