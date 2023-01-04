import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { Usuario } from './shared/models/usuario.interface';
import * as authActions from './auth/actions/auth.action';
import * as juguetesActions from './juguete/actions/juguete.actions';
import * as experienciasActions from './experiencias/actions/experiencias.actions';
import { AuthState } from './auth/reducers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'gegantoys';
  
  sectionId!:string;
  usuario!:Usuario;
  isUsuarioAutentificado!:boolean;
  isUsuarioAdmin!:boolean;


  constructor( 
    private router:Router,
    private store: Store<AppState>,
    private activatedRoute:ActivatedRoute,
   ) {
      
      this.store.select('auth').subscribe ({
        next:(authState:AuthState) => {
          this.isUsuarioAutentificado = authState.auth.access_token ? true: false;
          this.isUsuarioAdmin = authState.auth.isAdmin;
        }
      });

  }

  ngOnInit(): void {
  }

  logout():void {

      this.store.dispatch(authActions.logout());

  }


}
