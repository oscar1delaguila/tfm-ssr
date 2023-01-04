import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as varGlobals from "../../../globals";
import { JugueteAdminState } from '../../reducer/juguete-admin.reducers';
import * as juguetesAdminActions from '../../actions/juguete-admin.actions';
import { Juguete } from 'src/app/shared/models/juguete.interface';

@Component({
  selector: 'app-juguete-listado',
  templateUrl: './juguete-listado.component.html',
  styleUrls: ['./juguete-listado.component.scss']
})
export class JugueteListadoComponent implements OnInit {

  juguetes!:Juguete[];
  loaded:boolean = false;
  trustedUrl!:SafeUrl[];
  server:string;
  numeroPagina:number = 1;
  publicado!:FormControl;

  constructor( 
                private store: Store<AppState>,
                private router:Router,
                private sanitizer: DomSanitizer
             ) {

      this.server = varGlobals.server + '/Juguetes';
      this.publicado = new FormControl();        

      this.store.select('jugueteAdmin').subscribe({
        next:(jugueteAdminState: JugueteAdminState) => {

          this.numeroPagina = jugueteAdminState.numeroPagina;
          if (jugueteAdminState.juguetes) {
            this.juguetes = jugueteAdminState.juguetes;
            this.trustedUrl = this.juguetes.map( (juguete:Juguete) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + '/' + juguete.path_imagen +'/'+ juguete.id +'/'+ juguete.imagen1) } );
            this.loaded = true;
          }
        }
      });

  }

  ngOnInit(): void {
    this.store.dispatch(juguetesAdminActions.resetJugueteAdmin());
    this.loadJuguetes();
  }


  loadJuguetes():void {
    
    this.store.dispatch(juguetesAdminActions.getAllJuguetes({numeroPagina:this.numeroPagina}));
  }


  crearJuguete():void {
    this.router.navigateByUrl('/juguetes-listado/form/');
  }


  editar(idJuguete:string):void {
    this.router.navigateByUrl('/juguetes-listado/form/' + idJuguete);    
  }

  eliminar(idJuguete:string):void {
    this.loaded = false;
    this.store.dispatch(juguetesAdminActions.deleteJuguete({idJuguete:idJuguete}));
  }

  /*
  myTrackByJuguete(index: number, juguete: Juguete): string {  
    //elemento identificador para saber a partir de cuando hay qeu añadir.
    return juguete.id ? juguete.id : '';  
  } 
  */
  publicarJuguete(idJuguete:string, publicado:boolean):void {

    let valorCheckbox:boolean;

    if (publicado) {
      valorCheckbox = ( <HTMLInputElement>document.getElementById('checkboxJugueteP' + idJuguete)).checked;
    } else {
      valorCheckbox = ( <HTMLInputElement>document.getElementById('checkboxJugueteNP' + idJuguete)).checked;
    }

    this.store.dispatch(juguetesAdminActions.publicarJuguete({idJuguete:idJuguete, valorCheckbox:valorCheckbox}));
  }
}
