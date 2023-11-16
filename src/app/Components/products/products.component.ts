import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Model/Iproduct';
import { ApiProductServicesService } from 'src/app/Services/api-product-services.service';
import { ProductServicesService } from 'src/app/Services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  constructor(public productServices: ApiProductServicesService) {}
  ngOnInit(): void {
    this.productList = this.productServices.getAllProduct();
  }
  delete(id: number) {
    this.productServices.deleteProduct(id);
  }
}
