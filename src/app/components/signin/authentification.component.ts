import { Component, OnInit } from '@angular/core';
import { authentificationService } from 'src/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService:authentificationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(dataForm: any){
    this.authService.signin(dataForm.email, dataForm.password)
    if(this.authService.isAuthenticated){
      this.authService.saveAuthenticatedUser();
      this.router.navigateByUrl('home')
    }
    this.router.navigateByUrl('home')
  }
  

}
