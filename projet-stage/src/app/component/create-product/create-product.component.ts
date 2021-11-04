import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from "../../service/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 

  constructor(private productService : ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }
  public onAddProduct(a : any , b:any , c: any , d:any): void {
    let product: any = {
      "date_creation": "",
      "date_modif": "", 
      "qt": b,
      "nom": a,
      "disponible" :c,
      "categories": {
          "id":d
      }
    };
    this.productService.create(product).subscribe(
      (response) => {
        console.log(response);
        // addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // addForm.reset();
      }
    );
    this.router.navigateByUrl('/getProducts');
  }

}
