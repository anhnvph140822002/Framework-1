import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: IProduct[]
  constructor(private productService: ProductService) { 
    this.productService.getProductList().subscribe(data => {
      // this.products = data
    });
  }

  ngOnInit(): void {
  }
  // onHandleDelete(id: number) {
  //   this.products = this.products.filter(product => product.id !== id);
  // }
  // onHandleGetInfo(product: IProduct) {
  //   this.products = product;
  //   console.log('product', product)
  // }
}

