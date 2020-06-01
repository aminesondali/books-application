import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'books Application';
  constructor( private authService: authentificationService, private router: Router, ){}

  ngOnInit():void {
      this.authService.loadAuthentificatedUserFromLocalStorage();
  }

  onSignout(){
    this.authService.removeTokenFromLocalStorage();
    this.router.navigateByUrl('/signin');
  }
}
 