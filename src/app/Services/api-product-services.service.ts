import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../Model/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class ApiProductServicesService {
  httpUrl: string = 'http://localhost:3000/Product';
  constructor(private httpClient: HttpClient) {}
  getAllProduct() {
    return this.httpClient.get(this.httpUrl);
  }
  getAllById(id: number) {
    return this.httpClient.get(`${this.httpUrl}/${id}`);
  }
  addProduct(product: IProduct) {
    this.httpClient.post(this.httpUrl, product);
  }
  editProduct(id: number, product: IProduct) {
    this.httpClient.put(`${this.httpUrl}/${id}`, product);
  }
  deleteProduct(id: number) {
    this.httpClient.delete(`${this.httpUrl}/${id}`);
  }
}
