import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authentificationService } from 'src/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class NosigninauthGuard implements CanActivate {
  
  constructor( private authService: authentificationService,
    private router: Router 
                             ){}

canActivate(): boolean {
if( ! this.authService.loggedin() ){
return true
}else{
this.router.navigate(['/home'])
return false
}
}

}
