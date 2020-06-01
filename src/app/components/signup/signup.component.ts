import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/services/users.service';
import { authentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService:userService,
    private authService:authentificationService ) { 

      this.user = new User();
      this.user.role = "USER"
    }

    onSubmit(){
      if(this.authService.isAdmin()){
      this.userService.addUser(this.user).subscribe(result => this.goToListUsers());
      }else{
        this.userService.addUser(this.user).subscribe(result => this.goToLogin());
      }
    }
    goToLogin(){
      this.router.navigate(['/login']);
    }
    goToListUsers(){
      this.router.navigate(['/users']);
    }


}
