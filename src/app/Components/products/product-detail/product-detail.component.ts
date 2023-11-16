import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Model/Iproduct';
import { ApiProductServicesService } from 'src/app/Services/api-product-services.service';
import { ProductServicesService } from 'src/app/Services/product-services.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  public product: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ApiProductServicesService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getAllById(this.productId);
  }
}
