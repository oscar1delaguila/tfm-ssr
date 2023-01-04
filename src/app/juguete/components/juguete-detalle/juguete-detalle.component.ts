import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/auth/reducers';
import { Favorito } from 'src/app/shared/models/favorito.interface';
import * as varGlobals from "../../../globals";
import { AppState } from 'src/app/app.reducers';
import * as jugueteActions from '../../actions/juguete.actions'
import { JugueteState } from '../../reducer/juguete.reducers';
import { Juguete } from 'src/app/shared/models/juguete.interface';



@Component({
  selector: 'app-juguete-detallle',
  templateUrl: './juguete-detalle.component.html',
  styleUrls: ['./juguete-detalle.component.scss']
})
export class JugueteDetalleComponent implements OnInit {


  loaded:boolean = false;

  juguete!: Juguete;
  userId!:string;
  jugueteId!:string;
  isFavorito: boolean;
  favoritoId!: string;
  server!: string;
  favorito!:Favorito;

  trustedUrl1!:SafeUrl;
  trustedUrl2!:SafeUrl;
  trustedUrl3!:SafeUrl;
  trustedUrl4!:SafeUrl;
  trustedUrl5!:SafeUrl;
  trustedUrl6!:SafeUrl;
  trustedUrl7!:SafeUrl;
  trustedUrl8!:SafeUrl;


  constructor(
      private activatedRoute:ActivatedRoute,
      private router:Router,
      private sanitizer:DomSanitizer,
      private store:Store<AppState>,
   
    ) { 

      this.isFavorito = false;
      this.server = varGlobals.server + '/Juguetes/';
      this.jugueteId =  this.activatedRoute.snapshot.paramMap.get('id')||"";
    

      this.store.select('auth').subscribe({
        next:(AuthState:AuthState) => {
          this.userId = AuthState.auth.user_id;
        }
      });
  
      this.store.select('juguete').subscribe({
        next:(jugueteState:JugueteState) => {
          
          this.isFavorito = jugueteState.isFavorito;
          this.juguete = jugueteState.juguete;
          this.favoritoId = jugueteState.idFavorito;

          let dangerousUrl:string = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id.toString() +'/'+ this.juguete.imagen1;
          this.trustedUrl1 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id.toString() +'/'+ this.juguete.imagen2;
          this.trustedUrl2 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id.toString() +'/'+ this.juguete.imagen3;
          this.trustedUrl3 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id.toString() +'/'+ this.juguete.imagen4;
          this.trustedUrl4 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id +'/'+ this.juguete.imagen5;
          this.trustedUrl5 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id +'/'+ this.juguete.imagen6;
          this.trustedUrl6 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id +'/'+ this.juguete.imagen7;
          this.trustedUrl7 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          dangerousUrl = this.server +'/'+ this.juguete.path_imagen +'/'+ this.juguete.id +'/'+ this.juguete.imagen8;
          this.trustedUrl8 = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  
          this.loaded = true;
  

        }
      });



    }

  ngOnInit(): void {

    this.store.dispatch(jugueteActions.getJugueteById({idJuguete:this.jugueteId}));
    if (this.userId) {
      this.store.dispatch(jugueteActions.getFavoritoByUserAndIdJuguete({idJuguete:this.jugueteId, idUser: this.userId})) 
    }

  }


  anyadirAFavoritos(idJuguete:string) {

    this.favorito  = { 
      id:'', 
      juguete_id: idJuguete, 
      user_id: this.userId 
    }; 

    this.store.dispatch(jugueteActions.createFavorito({ favorito: this.favorito}));

  }

  
  eliminarDeFavoritos() {

    this.store.dispatch(jugueteActions.deleteFavoritoFromDetalleJuguete({ idFavorito :this.favoritoId}));

  }

}
