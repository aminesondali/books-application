import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/services/books.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book: Book[]
  idBook:number;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private userService:BookService) {  
      this.idBook = activatedRoute.snapshot.params['id']
    }

    ngOnInit(){
      this.userService.getBook(this.idBook).subscribe(data => {
        this.book = data;
        console.log(this.book) 
      });
    }  
    
    onUpdateBook(){
      this.userService.updateBook(this.idBook, this.book).subscribe(data =>{
          alert("Le livre a été mis à jour avec succès")
      })
    }

}
