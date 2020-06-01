import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {
  books: Book[];
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  public onDeleteBook(id: number) {
    let confirm = window.confirm("You are going to delete this book! Are you sure? ");
    if (confirm) {
      this.bookService.deleteBook(id).subscribe(
        (data) => { this.Refresh() },
        (error) => console.log(error)
      );
    }
  }
  Refresh(){
    window.location.reload();
  }

}
