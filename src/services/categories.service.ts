import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable()

export class categoryService{
    private categoriesUrl: string
    constructor(public http:HttpClient){   
        this.categoriesUrl = 'http://localhost:8081/categories';
    }

    public getCategories():Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl);
      }
    public addCategory(user: Category) {
        return this.http.post<Category>(this.categoriesUrl, user);
      }
   
      public deleteCategory(id: number): Observable<any> {
        return this.http.delete(`${this.categoriesUrl}/${id}`);
      }
      public updateCategory(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.categoriesUrl}/${id}`, value);
      }
      public getCategory(id: number){  
        return this.http.get<Category[]>(this.categoriesUrl + '/' + id);  
      }  
}
