import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as varGlobals from '../../../globals';

import { JugueteState } from '../../reducer/juguete.reducers';

import * as jugueteActions from '../../actions/juguete.actions';
import { TreeService } from 'src/app/shared/services/tree.service';
import { Nodo } from 'src/app/shared/models/nodo';
import { CategoriaRenderizable } from 'src/app/shared/models/categoria-renderizable.interface';


@Component({
  selector: 'app-categorias-tree',
  templateUrl: './categorias-tree.component.html',
  styleUrls: ['./categorias-tree.component.scss']
})
export class CategoriasTreeComponent implements OnInit {

  @Output() categoriaSelected:EventEmitter<string> = new EventEmitter<string>();

  loaded:boolean;
  server!:string;

  treeCategorias!:Nodo;

  categoriasRenderizables!: CategoriaRenderizable [];
  subcategorias1!: string[];
  subcategorias2!: string[];

  breadCrumbs!:string[];
  showItems!:boolean;

  constructor(  

        private treeService: TreeService,
        private store:Store<AppState>

    ) {

      this.server = varGlobals.server + '/Categorias/';
      this.showItems = true;
      //this.breadCrumbs = ["Categorías"];
      this.categoriasRenderizables = [];
      this.loaded = false;

      this.store.select('juguete').subscribe({
        next:(jugueteState:JugueteState) => {
          this.treeCategorias = this.treeService.creaArbolFromCategorias(jugueteState.categorias);
          this.breadCrumbs = jugueteState.breadcrumbs;
          this.categoriasRenderizables = this.treeService.loadHijosFromNodo(jugueteState.categoriaSeleccionada,this.treeCategorias);
          this.loaded = true;
        }
      });
      //this.loadCategoriasFromBreadCrumbs('Categorías');
     }

  ngOnInit(): void {
    this.store.dispatch(jugueteActions.getAllCategorias());
  }


  loadCategoriasFromBreadCrumbs(itemBreadCrumbsClicado:string):void {


    this.store.dispatch(jugueteActions.setCategoriaSeleccionada({categoriaSeleccionada:itemBreadCrumbsClicado}));


    //obtenemos los hijos del padre
    this.categoriasRenderizables = this.treeService.loadHijosFromNodo(itemBreadCrumbsClicado, this.treeCategorias);

    //Relativo al breadCrumbs
    let indexCategoriaEnBreadCrumb:number = this.breadCrumbs.findIndex( item => item === itemBreadCrumbsClicado );
    
    for (let i=indexCategoriaEnBreadCrumb + 1; i < this.breadCrumbs.length; i++){
      let idLiBreadCrumb = <HTMLLIElement>document.querySelector('ol li + li');
      document.getElementById('idLiBreadCrumb')?.removeChild(idLiBreadCrumb);
    }

    //Quitamos elementos del breadcrumbs con la funcion slice
    this.store.dispatch(jugueteActions.deleteCategoriaToBreadCrumbs({indexCategoriaEnBreadCrumb:indexCategoriaEnBreadCrumb }));
    //this.breadCrumbs = this.breadCrumbs.slice(0, indexCategoriaEnBreadCrumb + 1);

    this.store.dispatch(jugueteActions.resetJuguete());
    //Pasamos el literal categoria al padre para realizar la busqueda por categoria
    this.categoriaSelected.emit(itemBreadCrumbsClicado);

    
  }


  loadCategoriasFromPanel(categoriaPanelClicado:string):void {

    this.store.dispatch(jugueteActions.setCategoriaSeleccionada({categoriaSeleccionada:categoriaPanelClicado}));

    this.categoriasRenderizables = this.treeService.loadHijosFromNodo(categoriaPanelClicado, this.treeCategorias);

    //Añadimos elementos al breadcrumbs
    //this.breadCrumbs.push(categoriaPanelClicado);
    this.store.dispatch(jugueteActions.addCategoriaToBreadCrumbs({categoria:categoriaPanelClicado}));

    this.store.dispatch(jugueteActions.resetJuguete());
    //Pasamos el literal categoria al padre para realizar la busqueda por categoria
    this.categoriaSelected.emit(categoriaPanelClicado);


  }

  showCategorias():void{
    this.showItems = true;
  }

  hideCategorias() {
    this.showItems = false;
  }



}
