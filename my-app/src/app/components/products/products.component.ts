import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input('data') productList!: IProduct[];

  productDeail!: IProduct; // undefined
  constructor() {
  }

  ngOnInit(): void {
  }

  onHandlerDelete(id: Number) {
    this.productList = this.productList.filter(product => product.id !== id)
  }
  
  onHandlerGetinfo(product: IProduct){
    this.productDeail = product
  }
  
}

