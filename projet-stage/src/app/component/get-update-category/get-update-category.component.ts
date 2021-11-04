import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import { CategoryService } from "../../service/category.service";

import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-get-update-category',
  templateUrl: './get-update-category.component.html',
  styleUrls: ['./get-update-category.component.css']
})
export class GetUpdateCategoryComponent implements OnInit {
  public categories: Category[] = [];
  public products: Product[] = [];
  public actualCategory : any;
  public id1 : number =0;
  public id2 : number =0;
  public nom1 : string="";
  public tr : boolean = false;

  constructor(private categoryService : CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
    
  }

  public getCategories(): void {
    this.categoryService.getAll().subscribe(
      (response : Category[] ) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error: HttpErrorResponse ) => {
        alert(error.message);
      }
    )
  }
   getId(id : number, nom: string) {
     this.id2 = id;
     this.tr = true;
     this.nom1=nom;
     console.log(id);
     this.getProductByCategory(id);
   }
   public getProductByCategory(id: number): void {
     this.productService.getbyCategory(id).subscribe(
       (response : Product[] ) => {
         this.products = response;
         console.log(response);
       },
       (error: HttpErrorResponse ) => {
         alert(error.message);
       }
     )
   }

  public onUpdateCategory(category: Category , id:number): void {
    this.categoryService.update(category, id).subscribe(
      (response ) => {
        console.log(response);
        this.getCategories();
        console.log("hello");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteCategory(Id: number): void {
    this.categoryService.delete(Id).subscribe(
      (response ) => {
        console.log(Id);
        console.log(response);
        console.log("hi")
        this.getCategories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onclick(id: number, category: any) {
    this.id1 = id;
    this.actualCategory = category
    console.log(id);
  }

}
