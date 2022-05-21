import { Injectable } from '@angular/core';
import data from '../data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: any): Observable<IProduct> {
    // return data.find(item => item.id === id);
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  removeProduct(id:any) {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  addProduct() {

  }
  updateProduct() {

  }
}