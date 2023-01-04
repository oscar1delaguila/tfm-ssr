import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Auth } from 'src/app/auth/models/auth.interface';
import { AuthState } from 'src/app/auth/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  access_token!:string;

  constructor(
    private router: Router,
    private store:Store<AppState>
  ) {

    this.store.select('auth').subscribe({
      next:(authState:AuthState) => {
        this.access_token = authState.auth.access_token;
      }
    });

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.access_token) {
        //Si esta logado la pagina se cargará
        return true;
      }
  
      this.router.navigate(['/login']);
  
      return false;
  
  }
  
}
