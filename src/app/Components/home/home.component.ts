import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Model/Iproduct';
import { ApiProductServicesService } from 'src/app/Services/api-product-services.service';
import { ProductServicesService } from 'src/app/Services/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: any;
  constructor(public productServices: ApiProductServicesService) {}
  ngOnInit(): void {
    this.productServices.getAllProduct().subscribe({
      next: (respons) => {
        this.productList = respons;
      },
      complete: () => {},
      error: () => {},
    });
  }
}
