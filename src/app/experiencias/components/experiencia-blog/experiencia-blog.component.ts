import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Experiencia } from 'src/app/shared/models/experiencia.interface';
import * as varGlobals from "../../../globals";
import * as experienciasActions from '../../actions/experiencias.actions';
import { ExperienciaState } from '../../reducer';

@Component({
  selector: 'app-experiencia-blog',
  templateUrl: './experiencia-blog.component.html',
  styleUrls: ['./experiencia-blog.component.scss']
})
export class ExperienciaBlogComponent implements OnInit {


  experiencias!:Experiencia[];
  loaded:boolean = false;
  server!:string;
  trustedUrl!:SafeUrl[];
  numeroPagina!:number;
  experienciaIdDeDetalle:string ='';

  constructor( 
                private store: Store<AppState>,
                private activatedRoute:ActivatedRoute,
                private router:Router,
                private sanitizer: DomSanitizer
             ) { 

        this.server = varGlobals.server + '/Experiencias';

        this.experienciaIdDeDetalle =  this.activatedRoute.snapshot.paramMap.get('id')||"";
        if (this.experienciaIdDeDetalle !='' ) {  
          this.store.dispatch(experienciasActions.setIdExperienciaDetalle({idExperienciaDetalle:this.experienciaIdDeDetalle}));
        }

        this.store.select('experiencia').subscribe({
          next:(experienciaState:ExperienciaState) => {

              this.numeroPagina = experienciaState.numeroPagina;

              if (experienciaState.experiencias) {
                this.experiencias = experienciaState.experiencias;
                this.trustedUrl = this.experiencias.map( (experiencia:Experiencia) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + '/' + experiencia.user_id +'/'+ experiencia.id +'/'+ experiencia.imagen_experiencia) } );
                this.loaded = experienciaState.loaded;
              }  

              if (experienciaState.idExperienciaDetalle) {
                let idElement = <HTMLDivElement>document.getElementById('experiencias' + experienciaState.idExperienciaDetalle);
                //idElement.scrollIntoView({behavior:'auto'});
                idElement.scroll({top:900});
                this.experienciaIdDeDetalle = '';
                this.store.dispatch(experienciasActions.setIdExperienciaDetalle({idExperienciaDetalle:''}));
              }
          } 
        });      
        /*
        */

  }

  ngOnInit(): void {
    //this.store.dispatch(experienciasActions.resetExperiencia());
    this.store.dispatch(experienciasActions.getExperiencias({numeroPagina: this.numeroPagina}));
    
    if (this.experienciaIdDeDetalle) {
      let idElement = <HTMLDivElement>document.getElementById('experiencias' + this.experienciaIdDeDetalle);
      idElement.scrollIntoView({behavior:'auto'});
      this.experienciaIdDeDetalle = '';
      this.store.dispatch(experienciasActions.setIdExperienciaDetalle({idExperienciaDetalle:''}));
    }

  }


  getListaExperienciasBlog():void {
    this.router.navigateByUrl('experiencias');
    this.store.dispatch(experienciasActions.getExperiencias({numeroPagina: this.numeroPagina}));
  }


  /*
  myTrackByExperiencia(index: number, experiencia: Experiencia): string {  
    //elemento identificador para saber a partir de cuando hay qeu añadir.
    return experiencia.id;  
  } 
  */

}
