import { TodoService } from 'src/app/services/todo-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css'],
})
export class TodolistItemComponent implements OnInit {
  constructor(private todosService:TodoService) {}

  @Input() todo: any;
  //@Output() deleteTodoEvent = new EventEmitter()

  ngOnInit(): void {}

  deleteTodo() {
    console.log('Delete TODO')
    //this.deleteTodoEvent.emit(this.todo.id)
    this.todosService.deleteTodo(this.todo.id)
  }
}
