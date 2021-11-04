import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiBaseUrl ;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(`${this.baseUrl}/product/all`);
  }

  getbyCategory(id: number) {
    return this.http.get<Product[]>(`${this.baseUrl}/product/cat/${id}`);
  }

  // getById(id: string) {
  //   return this.http.get<Category>(`${baseUrl + "byid"}/${id}`);
  // }

  create(product: Product):Observable<any> {
    return this.http.post(`${this.baseUrl}/product/add`, product);
  }

  update(product: Product , id:number) {
    return this.http.put(`${this.baseUrl}/product/update/${id}`, product);
  }

  delete(id: number) {
     return this.http.delete(`${this.baseUrl}/product/delete/${id}`);
   }

  exportPdfProducts(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/product/export/pdf` , { responseType: 'blob' });
  }

  exportExcelProducts(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/product/export/excel` , { responseType: 'blob' });
  }
}
