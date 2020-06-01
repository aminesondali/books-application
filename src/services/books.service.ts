import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable()

export class BookService{
    private booksUrl: string;
    private booksUrlPriceAsc: string;
    private booksUrlPriceDesc: string;
    private booksUrlNote: string

    constructor(public http:HttpClient){   
        this.booksUrl = 'http://localhost:8081/books';
        this.booksUrlPriceAsc = 'http://localhost:8081/books-by-price-asc';
        this.booksUrlPriceDesc = 'http://localhost:8081/books-by-price-desc';
        this.booksUrlNote = 'http://localhost:8081/books-by-note';
    }

    public getBooks():Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrl);
      }
    public addBook(Book: Book) {
        return this.http.post<Book>(this.booksUrl, Book);
      }
    public getBook(id: number){  
        return this.http.get<Book[]>(this.booksUrl + '/' + id);  
      }  
   
    public updateBook(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.booksUrl}/${id}`, value);
      }

    public deleteBook(id: number): Observable<any> {
        return this.http.delete(`${this.booksUrl}/${id}`);
      }

    public getBooksByPriceAsc():Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrlPriceAsc);
      }

    public getBooksByPriceDesc():Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrlPriceDesc);
      }

    public getBooksByNote():Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrlNote);
      }
}