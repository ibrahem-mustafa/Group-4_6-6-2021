import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  show = false;
  title = 'Hello From Angular';



  product = {
    id: '312498279854',
    name: 'Product One',
    av: false
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
}
