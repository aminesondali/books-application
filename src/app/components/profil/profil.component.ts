import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { userService } from 'src/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user:User[];
  idUser:number;
  constructor(private userService:userService, private activatedRoute: ActivatedRoute , private router: Router ) { 
    this.idUser = activatedRoute.snapshot.params['id'] ;
  }

  ngOnInit() {
    this.userService.getUser(this.idUser).subscribe(data => {
      this.user = data;
      console.log(this.user)
    });
  }
}
 