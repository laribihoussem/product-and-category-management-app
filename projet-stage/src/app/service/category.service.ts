import { Injectable } from '@angular/core';
import { Category } from "../model/category";
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

   getAll() {
    return this.http.get<Category[]>(`${this.baseUrl}/category/all`);
   }

  // getById(id: string) {
  //   return this.http.get<Category>(`${baseUrl + "byid"}/${id}`);
  // }

  create(category: Category) {
    return this.http.post(`${this.baseUrl}/categories/add`, category);
  }

   update(category: Category , id:number) {
     return this.http.put(`${this.baseUrl}/category/update/${id}`, category);
   }

  delete(id: number) {
     return this.http.delete(`${this.baseUrl}/category/delete/${id}`);
   }
}
