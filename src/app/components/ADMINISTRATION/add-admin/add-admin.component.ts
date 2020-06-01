import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/services/users.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent  {

  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService:userService) { 

      this.user = new User();
      this.user.role = "ADMIN"
    }

    onSubmit(){
      this.userService.addUser(this.user).subscribe(result => this.goToLogin());
    }
    goToLogin(){
      this.router.navigate(['/list-admins']);
    }



}
