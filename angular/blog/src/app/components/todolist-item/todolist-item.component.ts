import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css'],
})
export class TodolistItemComponent implements OnInit {
  constructor() {}

  @Input() todo: any;
  @Output() deleteTodoEvent = new EventEmitter()

  ngOnInit(): void {}

  deleteTodo() {
    console.log('Delete TODO')
    this.deleteTodoEvent.emit(this.todo.id)
  }
}
