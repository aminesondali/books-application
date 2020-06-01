import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { userService } from 'src/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {
  users: User[];
  
  constructor(
    private userService: userService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    });
  }

  public onDeleteUser(id: number) {
    let confirm = window.confirm("You are going to delete this user! Are you sure? ");
    if (confirm) {
      this.userService.deleteUser(id).subscribe(
        (data) => { this.Refresh() },
        (error) => console.log(error)
      );
    }
  }
  Refresh(){
    window.location.reload();
  }
}
