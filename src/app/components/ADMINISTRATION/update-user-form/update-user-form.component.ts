import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/services/users.service';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})

export class UpdateUserFormComponent implements OnInit {

  user: User[]
  idUser:number;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private userService:userService) {  
      this.idUser = activatedRoute.snapshot.params['id']
    }

    ngOnInit(){
      this.userService.getUser(this.idUser).subscribe(data => {
        this.user = data;
        console.log(this.user) 
      });
    }  
    
    onUpdateUser(){
      this.userService.updateUser(this.idUser, this.user).subscribe(data =>{
          alert("User profil Updated")
      })
    }

}  


