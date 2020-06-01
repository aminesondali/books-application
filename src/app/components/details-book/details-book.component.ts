import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  book:Book[];
  idBook:number;
  constructor(private bookService:BookService, private activatedRoute: ActivatedRoute , private router: Router ) { 
    this.idBook = activatedRoute.snapshot.params['id'] ;
  }

  ngOnInit() {
    this.bookService.getBook(this.idBook).subscribe(data => {
      this.book = data;
      console.log(this.book)
    });
  }

}



