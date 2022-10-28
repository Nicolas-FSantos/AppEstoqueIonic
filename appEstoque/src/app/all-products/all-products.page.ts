import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductsSerService } from '../products-ser.service'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {

  public produtos;
  public hora;

  constructor(public prod : ProductsSerService) {

  
  }

  ngOnInit() {
  }

}
