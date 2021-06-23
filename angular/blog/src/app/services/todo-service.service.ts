import { Injectable } from '@angular/core';


/*type USER_TYPE = {
  name: string;
  email: string
}

type ADMIN_USER_TYPE = {
  name: string;
  email: string;
  role: string;
}

interface USER_INTERFACE {
  name: string;
  email: string;
}

interface ADMIN_USER_INTERFACE extends USER_INTERFACE {
  role: string;
}

const user1: ADMIN_USER_TYPE = {

}

const user2: ADMIN_USER_INTERFACE = {


  interface CAR_INTERFACE {
    name: string;
    model: number;
    price: number;
    print(): void;
    updatePrice(price: number): void
  }


  class Car implements CAR_INTERFACE{
    name: string;
    model: number;
  price: number;

  constructor(name: string, model: number, price: number) {
    this.name = name;
    this.model = model
    this.price = price
  }

  print(): void {
    console.log(this.name + this.model + this.price)
  }
  updatePrice(price: number): void {
    this.price = price;
  }
}

// user | admin | publisher
type USER_ROLE = 'user' | 'admin' | 'publisher'

const role: USER_ROLE = 'useeeer'
};*/


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

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
