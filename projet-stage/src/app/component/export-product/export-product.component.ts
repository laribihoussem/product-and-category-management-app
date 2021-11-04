import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-export-product',
  templateUrl: './export-product.component.html',
  styleUrls: ['./export-product.component.css']
})
export class ExportProductComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  exportProductsPdf(){
    this.productService.exportPdfProducts().subscribe(x => {
      const blob = new Blob([x], {type: 'application/pdf'});

      if (window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = "products.pdf";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}))

      setTimeout(() => {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    }
    )
  }

  exportProductsExcel() {
    this.productService.exportExcelProducts().subscribe(x =>{
      const blob = new Blob([x], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

      if (window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = "products.xlsx";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}))

      setTimeout(() => {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    }
    )
  }
}
