import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CartModel, NewProductModel, ProductModel } from "../../models/product.model";

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getOneProduct(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  }

  addNewProduct(payload: NewProductModel): Observable<NewProductModel> {
    return this._httpClient.post<NewProductModel>('https://fakestoreapi.com/products', payload);
  }

  getCartInfo(id: string): Observable<CartModel> {
    return this._httpClient.get<CartModel>(`https://fakestoreapi.com/carts/${id}`);
  }
}
