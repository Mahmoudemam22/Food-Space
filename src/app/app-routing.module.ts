import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFondedComponent } from './Components/not-fonded/not-fonded.component';
import { ProductDetailComponent } from './Components/products/product-detail/product-detail.component';
import { ProductNewComponent } from './Components/products/product-new/product-new.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Products/:id', component: ProductDetailComponent },
  { path: 'Products/:id/Edit', component: ProductNewComponent },
  { path: '**', component: NotFondedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
