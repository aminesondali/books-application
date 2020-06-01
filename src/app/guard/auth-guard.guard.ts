import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { authentificationService } from 'src/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor( private authService: authentificationService,
    private router: Router 
                             ){}

canActivate(): boolean {
if(this.authService.isAdmin() ){
return true
}else{
this.router.navigate(['/signin'])
return false
}
}


  
}
