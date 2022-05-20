import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input() product!: IProduct
  product!: IProduct
  constructor(
    private router: ActivatedRoute,
    private ProductService: ProductService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    this.product = this.ProductService.getProduct(id)!;
  }

  ngOnInit(): void {
  }

}
