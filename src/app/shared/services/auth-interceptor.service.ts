import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Auth } from 'src/app/auth/models/auth.interface';
import { AuthState } from 'src/app/auth/reducers';

@Injectable({
  providedIn: 'root'
})



export class AuthInterceptorService implements HttpInterceptor {
  

  access_token:string = '';

  constructor(
                private store:Store<AppState>
             ) {
      
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {


    this.store.select('auth').subscribe({
      next:(authState:AuthState) => {
        this.access_token = authState.auth.access_token;
      }
    });



    //  null o '' ==> devuelve  ''.      
    console.log("access token: ", this.access_token );
    
    if (this.access_token) {
      req = req.clone({
        setHeaders: {

             //Comentamos estas linea para no tener restricciones a la hora
             //de enviar contenido ya qeu tb enviamos **FormsData**  y no solo json
             //'Content-Type': 'application/json;charset=utf-8',
             //'Content-Type': 'multipart/form-data; boundary=something',
             //'Content-Type': 'application/x-www-form-urlencoded',
             Accept: 'application/json',
             Authorization: `Bearer ${this.access_token}`,
          },
      });
    }

    return next.handle(req);
  }
}

