import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AuthState } from 'src/app/auth/reducers';
import { Favorito } from 'src/app/shared/models/favorito.interface';
import { FavoritosService } from 'src/app/shared/services/favoritos.service';
import * as varG from '../../../globals';
import { FavoritoState } from '../../reducer/favoritos.reducer';
import * as favoritoActions from '../../actions/favoritos.action';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {


  favoritos!:Favorito[];
  loaded:boolean = false;
  userId!:string;
  server!:string;
  trustedUrl:SafeUrl[] = [];

  constructor( 
                private sanitizer:DomSanitizer,
                private store: Store<AppState>
             ) { 

        this.server = varG.server + varG.sep + 'Juguetes' + varG.sep; 
     

        this.store.select('auth').subscribe({
          next:(authState:AuthState) => {
            this.userId = authState.auth.user_id;
            //PRINT   
            //console.log('Usuario del Store: ', this.user_id);
          }
        });

        this.store.select('favorito').subscribe({
          next:(favoritoState: FavoritoState) => {
            this.favoritos = favoritoState.favoritos;
            this.trustedUrl = this.favoritos.map( (favorito:Favorito) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + favorito.categoria_id + varG.sep + favorito.juguete_id + varG.sep + favorito.imagen_favorito ) } );
            this.loaded = true;
          } 

        });
        

  }

  ngOnInit(): void {

    this.getListaFavoritosByUser();

  }


  getListaFavoritosByUser():void {

    this.store.dispatch(favoritoActions.getAllFavoritosByUser({idUser:this.userId}))
    
  }

  eliminarDeFavoritos(idFavorito:string):void {

    this.store.dispatch(favoritoActions.deleteFavorito({idFavorito:idFavorito}))

  }
}
