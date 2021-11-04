import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/model/category';
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private categoryService : CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onAddCategory(addForm: NgForm): void {
  
    this.categoryService.create(addForm.value).subscribe(
      (response) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    this.router.navigateByUrl('/getCategories');
  }

}
