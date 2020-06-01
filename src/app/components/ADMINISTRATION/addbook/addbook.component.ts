import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/services/books.service';
import { categoryService } from 'src/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{

  book: Book;
  categories: Category[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService:BookService,
    private categoryService: categoryService) { 

      this.book = new Book();
    }

    onSubmit(){
      this.bookService.addBook(this.book).subscribe(result => alert("Le livre est ajouté avec succès"));
    }

    ngOnInit() {
      this.categoryService.getCategories().subscribe((data) => {
        this.categories = data;
      });
    }

}
