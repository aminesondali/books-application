import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { authentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-books-by-price-desc',
  templateUrl: './books-by-price-desc.component.html',
  styleUrls: ['./books-by-price-desc.component.css']
})
export class BooksByPriceDescComponent implements OnInit {
  books : Array<Book>;
  booksReceived: Array<Book>
  cartBooks: any;

  constructor( 
                private activatedRoute: ActivatedRoute, 
                private bookService: BookService,
                private router: Router,
                public authService: authentificationService
                
             ) {            
             }
  ngOnInit() {
    this.bookService.getBooksByPriceDesc().subscribe((resultat) => {
      this.books = resultat;
    });
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart')
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }
  }


  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();
    //get books returned by the api call
    this.booksReceived = response;
    for (const book of this.booksReceived) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.title = book.title;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.image = book.image;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.category = book.category;
      bookwithRetrievedImageField.note = book.note;
      bookwithRetrievedImageField.description = book.description;
      this.books.push(bookwithRetrievedImageField);
    }
  }


  addToCart(bookId) {
    //retrieve book from books array using the book id
    let book = this.books.find(book => {
      return book.id === +bookId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(book);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    book.isAdded = true;
    this.Refresh()
  }

  updateCartData(cartData) {
    this.cartBooks = cartData;
  }

  goToCart() {
    this.router.navigate(['/panier']);
  }

  emptyCart() {
    this.cartBooks = [];
    localStorage.clear();
  }

  Refresh(){
    window.location.reload();
  }

}
