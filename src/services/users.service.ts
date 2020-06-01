import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable()

export class userService{
    private usersUrl: string
    constructor(public http:HttpClient){   
        this.usersUrl = 'http://localhost:8080/users';
    }

    public getUsers():Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
      }
    public addUser(user: User) {
        return this.http.post<User>(this.usersUrl, user);
      }
    public getUser(id: number){  
        return this.http.get<User[]>(this.usersUrl + '/' + id);  
      }  
   
      public updateUser(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.usersUrl}/${id}`, value);
      }

      public deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.usersUrl}/${id}`);
      }

      
}