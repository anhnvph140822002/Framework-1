import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HelloComponent } from './components/hello/hello.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { BlogComponent } from './components/blog/blog.component';
import { WorkComponent } from './components/work/work.component';
import {AuthGuard} from './service/admin/auth.guard';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
const routes: Routes = [
  // path:"admin",canActivate:[AuthGuard] ,component: AdminLayoutComponent,
  { path: "", component: HelloComponent, pathMatch: 'full' },
  { path:"product", component: ProductsComponent},
  { path: "about", component: AboutComponent },
  {path: "Blog", component: BlogComponent},
  {path: "Work", component: WorkComponent},
  { path: "product/add", component: ProductAddComponent },
  { path: "product/edit/:id", component: ProductAddComponent },
  { path: "product/:id", component: ProductDetailComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
