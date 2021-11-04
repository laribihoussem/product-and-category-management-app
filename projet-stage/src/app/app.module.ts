import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CreateCategoryComponent } from './component/create-category/create-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetUpdateCategoryComponent } from './component/get-update-category/get-update-category.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { GetUpdateProductComponent } from './component/get-update-product/get-update-product.component';
import { ExportProductComponent } from './component/export-product/export-product.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryComponent,
    GetUpdateCategoryComponent,
    CreateProductComponent,
    GetUpdateProductComponent,
    ExportProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
