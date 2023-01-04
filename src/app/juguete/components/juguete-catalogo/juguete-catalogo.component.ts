import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as varGlobals from "../../../globals";
import { JugueteState } from '../../reducer/juguete.reducers';
import * as juguetesActions from '../../actions/juguete.actions';
import { Juguete } from 'src/app/shared/models/juguete.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-juguete-catalogo',
  templateUrl: './juguete-catalogo.component.html',
  styleUrls: ['./juguete-catalogo.component.scss']
})
export class JugueteCatalogoComponent implements OnInit {

  juguetes!:Juguete[];
  loaded:boolean;
  

  isBusquedaPorCategoria!:boolean;
  isBusquedaPorBuscador!:boolean;
  literalABuscar!:string;
  jugueteIdDeDetalle!:string;
  
  
  server:string;
  trustedUrl!:SafeUrl[];
  numeroPagina!:number;
  nodoDuplicadoJuguete!:Node;

  literalBusqueda!: FormControl;


  constructor( 
      private sanitizer: DomSanitizer,
      private activatedRoute:ActivatedRoute,
      private router:Router,
      private store: Store<AppState>
     ) { 

      this.server = varGlobals.server + '/Juguetes';

      this.numeroPagina = 1;
      this.isBusquedaPorCategoria = false;
      this.isBusquedaPorBuscador = false;
      this.literalABuscar = '';
      this.trustedUrl = [];
      this.loaded = false;
      this.literalBusqueda = new FormControl();

      this.jugueteIdDeDetalle =  this.activatedRoute.snapshot.paramMap.get('id')||"";

        this.store.select('juguete').subscribe({
          next:(jugueteState:JugueteState) => {

            
            this.literalABuscar = jugueteState.literalABuscar;
            if (jugueteState.isBusquedaBuscador) {
              this.literalBusqueda.setValue(jugueteState.literalABuscar);
            }
            this.isBusquedaPorCategoria = jugueteState.isBusquedaCategoria;
            this.isBusquedaPorBuscador = jugueteState.isBusquedaBuscador;
            this.numeroPagina = jugueteState.numeroPagina; 

            if (jugueteState.juguetes) {  

              this.juguetes = jugueteState.juguetes;
              this.trustedUrl = this.juguetes.map( (juguete:Juguete) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + '/' + juguete.path_imagen +'/'+ juguete.id +'/'+ juguete.imagen1) } );
              this.loaded = true;

            }
            if (this.jugueteIdDeDetalle) {

                let idElement = <HTMLDivElement>document.getElementById('juguete' + this.jugueteIdDeDetalle);
                idElement.scrollIntoView({behavior:'auto'});
                this.jugueteIdDeDetalle='';
            }

          }
        });
  }

  ngOnInit(): void {

    if (!this.jugueteIdDeDetalle){
      this.loadJuguetes();   
    }
  }


  loadJuguetes():void {

    this.router.navigateByUrl('juguetes');
    this.store.dispatch(juguetesActions.getJuguetes({
                                                     literalABuscar:this.literalABuscar, 
                                                     isBusquedaCategoria: this.isBusquedaPorCategoria, 
                                                     isBusquedaBuscador:this.isBusquedaPorBuscador,
                                                     numeroPagina:this.numeroPagina
                                                    }));

    
  }


/*

  myTrackByJuguete(index: number, juguete: Juguete): string {  

      //elemento identificador para saber a partir de cuando hay qeu añadir.
      return juguete.id;   

  } 

*/
  buscarPorCategoria( literalCategoria:string ):void {

    this.trustedUrl = [];
    this.store.dispatch(juguetesActions.setTipoConsultaCatalogo({literalABuscar:literalCategoria,isBusquedaCategoria:true, isBusquedaBuscador:false, numeroPagina:1 }));
    this.loadJuguetes(); 
    

  }


  buscarPorCampoBusqueda():void {

    if (this.literalBusqueda.value){
      this.trustedUrl = [];
      this.store.dispatch(juguetesActions.setTipoConsultaCatalogo({literalABuscar:this.literalBusqueda.value,isBusquedaCategoria:false, isBusquedaBuscador:true, numeroPagina:1 })) 
      this.store.dispatch(juguetesActions.resetJuguete());
      this.store.dispatch(juguetesActions.deleteCategoriaToBreadCrumbs({indexCategoriaEnBreadCrumb:0}));
      this.store.dispatch(juguetesActions.setCategoriaSeleccionada({categoriaSeleccionada:''}));
      this.loadJuguetes();
    }


  }


}
