import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AuthState } from 'src/app/auth/reducers';
import { Experiencia } from 'src/app/shared/models/experiencia.interface';
import * as varGlobals from "../../../globals";
import { ExperienciaAdminState } from '../../reducer';
import * as actionsExperiencias from '../../actions/experiencias-admin.actions';

@Component({
  selector: 'app-experiencia-listado',
  templateUrl: './experiencia-listado.component.html',
  styleUrls: ['./experiencia-listado.component.scss']
})
export class ExperienciaListadoComponent implements OnInit {


  userId!:string;
  isAdmin!:boolean;
  idExperiencia!:number;

  server!:string;
  experienciasUsuario!:Experiencia[];
  trustedUrl!:SafeUrl[];

  loaded:boolean = false;
  numeroPagina:number = 1;

  publicado!:FormControl;

  constructor( 
                private router:Router,
                private sanitizer:DomSanitizer,
                private store: Store<AppState>
             ) { 

        
        this.server = varGlobals.server + '/Experiencias/';
        this.publicado = new FormControl();

        this.store.select('auth').subscribe({
          next:(authState:AuthState) => {
            this.userId = authState.auth.user_id;
            this.isAdmin = authState.auth.isAdmin;
          }
        });
      
        this.store.select('experienciaAdmin').subscribe({
          next:(experienciaState:ExperienciaAdminState) => {

            this.numeroPagina = experienciaState.numeroPagina;
            //this.idExperiencia = Number.parseInt(experienciaState.idExperiencia);
            this.experienciasUsuario = experienciaState.experiencias;
            this.trustedUrl = this.experienciasUsuario.map( (experiencia:Experiencia) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + '/' + experiencia.user_id +'/'+ experiencia.id +'/'+ experiencia.imagen_experiencia) } );
            this.loaded = true;
          }  
        });

  }

  ngOnInit(): void {
    this.store.dispatch(actionsExperiencias.resetExperiencia());
    this.getListaExperienciasUsuario();
  }


  getListaExperienciasUsuario():void {
    if (!this.isAdmin) {
      this.store.dispatch(actionsExperiencias.getAllExperienciasByUsuario({idUser: this.userId, numeroPagina: this.numeroPagina }));
    } else {
      this.store.dispatch(actionsExperiencias.getAllExperiencias({numeroPagina:this.numeroPagina}));
    }  
  }

  crearExperiencia():void {
    
    this.router.navigateByUrl('/experiencias-listado/form/');
  }


  editar(idExperiencia:string):void {
    this.router.navigateByUrl('/experiencias-listado/form/' + idExperiencia)    
  }

  eliminar(idExperiencia:string):void {

    this.loaded = false;
    this.store.dispatch(actionsExperiencias.deleteExperiencia({idExperiencia:idExperiencia}));

  }

/* 
  myTrackByExperiencia(index: number, experiencia: Experiencia): string {  
    //elemento identificador para saber a partir de cuando hay qeu añadir.
    return experiencia.id;  
  } 
*/

  publicarExperiencia(idExperiencia:string, publicado:boolean):void {

    let valorCheckbox:boolean;

    if (publicado) {
      valorCheckbox = ( <HTMLInputElement>document.getElementById('checkboxExperienciaP' + idExperiencia)).checked;
    } else {
      valorCheckbox = ( <HTMLInputElement>document.getElementById('checkboxExperienciaNP' + idExperiencia)).checked;
    }

    this.store.dispatch(actionsExperiencias.publicarExperiencia({idExperiencia:idExperiencia, valorCheckbox:valorCheckbox}));
  }


}

