import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-get-update-product',
  templateUrl: './get-update-product.component.html',
  styleUrls: ['./get-update-product.component.css']
})
export class GetUpdateProductComponent implements OnInit {
  public products: Product[] = [];
  public actualProduct: any;
  public id1: number=0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }


  public getProduct(): void {
    this.productService.getAll().subscribe(
      (response : Product[] ) => {
        this.products = response;
        console.log(response);
      },
      (error: HttpErrorResponse ) => {
        alert(error.message);
      }
    )
  }
  onclick(product: Product , id : number) {
    this.actualProduct = product;
    this.id1=id;
    
  }
  public onUpdateProduct(a:any, b:any , c: any, id:number): void {
    let product: any = {
      "qt": b,
      "nom": a,
      "disponible" :c,
  };
    this.productService.update(product, id).subscribe(
      (response ) => {
        console.log(response);
        this.getProduct();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(Id: number): void {
    this.productService.delete(Id).subscribe(
      (response ) => {
        console.log(Id);
        console.log(response);
        console.log("hi")
        this.getProduct();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
