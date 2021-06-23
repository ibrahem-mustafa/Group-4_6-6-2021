import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello From Angular';
  date = new Date()
  /** show = false;



  product = {
    id: '312498279854',
    name: 'Product One',
    av: false,
    amount: 10
  }

  productClasses() {
    return {
      'green': this.product.av,
      'red': !this.product.av
    }
  }

  productStyles() {
    return {
      'font-size': this.product.av ? '4rem' : '2rem',
      'font-weight': this.product.av ? '700' : '400'
    }
  }

  pageTitle() {
    return this.title + ' By method'
  }


  changeAv() {
    this.product.av = !this.product.av
  }

  updateAmount(input: HTMLInputElement) {


    /**const input = event.target! as HTMLInputElement

    //if (!input) return;



   this.product.amount = +input.value
  }

  print() {
    console.log(this.product)
  }

  alert() {
    window.alert('Mouse Enter')
  }

  signedIn: boolean = true;

  user = {
    name: 'Ahmed',
    type: 'employee', // user || admin || employee
  };

  toggleSignedInState() {
    this.signedIn = !this.signedIn;
  }

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
  */
}

