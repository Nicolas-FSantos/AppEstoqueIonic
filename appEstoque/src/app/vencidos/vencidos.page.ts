import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductsSerService } from '../products-ser.service'

@Component({
  selector: 'app-vencidos',
  templateUrl: './vencidos.page.html',
  styleUrls: ['./vencidos.page.scss'],
})
export class VencidosPage implements OnInit {



  constructor(public prod: ProductsSerService) { 

  }

  ngOnInit() {
  }

}
