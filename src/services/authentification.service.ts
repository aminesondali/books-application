import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { userService } from "./users.service";
import { Router } from "@angular/router";

@Injectable()
export class authentificationService {
  private users: User[];

  public isAuthenticated: boolean;
  public userAuthenticated;
  public token: string;
  public adminAuthenticated;
  public admintoken;

  constructor(private userService: userService, private router: Router) {}

  public signin(email: string, password: string) {
    this.userService.getUsers().subscribe((users) => {
      this.userAuthenticated = users.find(
        (u) => u.email == email && u.password == password
      );
      if (this.userAuthenticated) {
        this.isAuthenticated = true;
        this.token = btoa(
          JSON.stringify({ email, role: this.userAuthenticated.role })
        );
        this.saveAuthenticatedUser();
      } else {
        this.isAuthenticated = false;
      }
    });
    /*
    this.users.forEach((u) => {
      if (u.email == email && u.password == password) {
        user = u;
        this.token = (btoa(JSON.stringify({ email: u.email})))
      }
    });

    if (user) {
      this.isAuthenticated = true;
      this.userAuthenticated = user;
    } else {
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
    }
    */
  }

  public isAdmin() {
    if (this.userAuthenticated) {
      return this.userAuthenticated.role === "ADMIN";
    }
    return false;
  }

  public saveAuthenticatedUser() {
    if (this.userAuthenticated) {
      localStorage.setItem("authToken", this.token);
    }
  }

  public loadAuthentificatedUserFromLocalStorage() {
    let t = localStorage.getItem("authToken");
    if (t) {
      let user = JSON.parse(atob(t));
      console.log(user);
      this.userAuthenticated = user;
      console.log(this.userAuthenticated);
      this.isAuthenticated = true;
      this.token = t;
    }
  }

  public removeTokenFromLocalStorage() {
    localStorage.removeItem("authToken");
    this.isAuthenticated = false;
    this.token = undefined;
    this.userAuthenticated = undefined;
    this.router.navigate(['/home'])
  }

  public loggedin(){
    return !!localStorage.getItem('authToken')
  }
}
