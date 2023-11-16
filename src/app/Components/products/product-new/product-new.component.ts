import { IProduct } from './../../../Model/Iproduct';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiProductServicesService } from 'src/app/Services/api-product-services.service';
import { ProductServicesService } from 'src/app/Services/product-services.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
})
export class ProductNewComponent implements OnInit {
  public productNavigation: number = 0;
  public id: number = this.getRandomNumber();
  public Name: string = '';
  public Description: string = '';
  public Price: number = 0;
  public Serving: number = 0;
  public img: string = '';
  public editProduct: any;

  constructor(
    public productServices: ApiProductServicesService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productNavigation = this.activatedRoute.snapshot.params['id'];
    console.log(this.productNavigation);

    if (this.productNavigation != 0) {
      let product = this.productServices
        .getAllById(this.productNavigation)
        .subscribe({
          next: (response) => {
            this.editProduct = response;
          },
        });
      console.log(product);

      if (this.editProduct != undefined) {
        this.Name = this.editProduct.Name;
        this.Description = this.editProduct.Description;
        this.Price = this.editProduct.Price;
        this.Serving = this.editProduct.Serving;
        this.img = this.editProduct.img;
      }
    }
  }
  addNewProduct(e: any) {
    let prop: IProduct = {
      id: this.id,
      Description: this.Description,
      img: this.img,
      Name: this.Name,
      Price: this.Price,
      Serving: this.Serving,
    };
    if (this.productNavigation == 0) {
      e.preventDefault();
      this.productServices.addProduct(prop);
      this.router.navigate(['/Products']);
    } else {
      e.preventDefault();
      prop.id = this.productNavigation;
      console.log(prop.id);
      console.log(this.productNavigation);

      console.log(prop);

      this.productServices.editProduct(this.productNavigation, prop);
      this.router.navigate(['/Products']);
    }
  }
  getRandomNumber(): number {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % 5000;
  }
}
