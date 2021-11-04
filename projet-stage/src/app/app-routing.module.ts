import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './component/create-category/create-category.component';
import { GetUpdateCategoryComponent } from './component/get-update-category/get-update-category.component';
import { CreateProductComponent } from "./component/create-product/create-product.component";
import { GetUpdateProductComponent } from './component/get-update-product/get-update-product.component';
import { ExportProductComponent } from './component/export-product/export-product.component';

const routes: Routes = [
  {path:'CreateCategories', component: CreateCategoryComponent},
  {path:'getCategories', component: GetUpdateCategoryComponent},
  {path:'CreateProducts', component: CreateProductComponent},
  {path:'getProducts', component: GetUpdateProductComponent},
  {path:'product/export', component: ExportProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
