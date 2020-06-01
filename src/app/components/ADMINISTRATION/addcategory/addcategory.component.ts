import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryService } from 'src/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit{

  category: Category;
  categories: Category[];
  idCategory:number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService:categoryService) { 

      this.category = new Category();
      this.idCategory = activatedRoute.snapshot.params['id']
    }

    onSubmit(){
      this.categoryService.addCategory(this.category).subscribe(result => {this.Refresh()});
    }

    ngOnInit(){
      this.categoryService.getCategories().subscribe((data) => {
        this.categories = data;
      });
    }


    public onDeleteCategory(id: number) {
      let confirm = window.confirm("You are going to delete this Category! Are you sure? ");
      if (confirm) {
        this.categoryService.deleteCategory(id).subscribe(
          (data) => { this.Refresh() },
          (error) => console.log(error)
        );
      }
    }
    Refresh(){
      window.location.reload();
    }

    /* onUpdateCategory(){
      this.categoryService.updateCategory(this.idCategory, this.categories).subscribe(data =>{
          alert("category Updated")
          console.log("amine")
      })
    } */


}
