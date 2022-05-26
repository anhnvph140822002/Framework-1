import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HelloComponent } from './components/hello/hello.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
const routes: Routes = [
  { path: "", component: HelloComponent, pathMatch: 'full' },
  { path:"product", component: ProductsComponent},
  { path: "about", component: AboutComponent },
  { path: "product/add", component: ProductAddComponent },
  { path: "product/edit/:id", component: ProductAddComponent },
  { path: "product/:id", component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
