import { Component } from '@angular/core';
import { ProductsSerService } from '../products-ser.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public prod: ProductsSerService) {}

  public getLenght() {
    return this.prod.getLenght();
  }

}
