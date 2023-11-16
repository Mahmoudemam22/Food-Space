import { Injectable } from '@angular/core';
import { IProduct } from '../Model/Iproduct';
import { ProductList } from '../Model/ProductList';

@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  constructor() {}
  getAllProducts(): IProduct[] {
    return ProductList;
  }
  getProductById(id: number): IProduct | undefined {
    return ProductList.find((p) => p.id == id);
  }
  addNewProduct(product: IProduct) {
    ProductList.push(product);
  }
  editProduct(updatedProduct: IProduct) {
    const index = ProductList.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index == -1) {
    }
    console.log(index);
    console.log(updatedProduct);
    console.log(ProductList[index]);
    ProductList[index] = updatedProduct;
    console.log(ProductList[index]);
  }
  deleteProduct(productId: number): boolean {
    const index = ProductList.findIndex((product) => product.id === productId);
    if (index === -1) {
      return false; // Product with the given ID was not found
    }
    ProductList.splice(index, 1);
    return true;
  }
}
