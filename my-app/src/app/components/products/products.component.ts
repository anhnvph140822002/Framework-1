import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

import { IProduct } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data!: IProduct[]
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    // chạy
    this.getProductList();

  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.data = data;
    })
  }
  onremoveProduct(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.data = this.data.filter(item => item.id !== id);
    })
  }
  onupdateProduct (product: IProduct){
    this.productService.updateProduct(product).subscribe(() =>{
      this.data = this.data.filter(item => item.id === product.id ? product : item);
    })
  }
  

}
  // onHandleGetInfo(product: IProduct) {
  //   this.products = product;
  //   console.log('product', product)
  // }


