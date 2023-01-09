import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { Categoria } from '../../../shared/models/categoria.interface';
import { Juguete } from '../../../shared/models/juguete.interface';
import { JugueteAdminState } from '../../reducer/juguete-admin.reducers';
import * as juguetesAdminActions from '../../actions/juguete-admin.actions';
import { Nodo } from 'src/app/shared/models/nodo';
import { Marca } from 'src/app/shared/models/marca.interface';
import { Material } from 'src/app/shared/models/material.interface';
import { TreeService } from 'src/app/shared/services/tree.service';
import { CategoriaRenderizable } from 'src/app/shared/models/categoria-renderizable.interface';




@Component({
  selector: 'app-juguete-form',
  templateUrl: './juguete-form.component.html',
  styleUrls: ['./juguete-form.component.scss']
})
export class JugueteFormComponent implements OnInit {

  
  isUpdateMode: boolean = false;

  arrayCategorias!: Categoria[];
  treeCategorias!: Nodo;
  jugueteId!: string;

  loaded!: boolean;

  jugueteForm!: FormGroup;
  juguete!:Juguete;


  categoriasListaRenderizable!: CategoriaRenderizable[];
  subcategorias1ListaRenderizable!: CategoriaRenderizable[];
  subcategorias2ListaRenderizable!: CategoriaRenderizable[];

  marcasLista!: Marca[];
  materialesLista!: Material[];
  edadesLista!: string[];

  categorias!: FormControl;
  subcategorias1!: FormControl;
  subcategorias2!: FormControl;
  
  marcas!:FormControl;
  materiales!:FormControl;
  edad!:FormControl;
  
  ancho!:FormControl;
  largo!:FormControl;
  alto!:FormControl;

  tituloJuguete!: FormControl;
  precioJuguete!:FormControl;
  descripcion!: FormControl;
  
  publicado!:FormControl;

  puntuacion!:FormControl;
  num_votaciones!:FormControl;


  pro1!:FormControl;
  pro2!:FormControl;
  pro3!:FormControl;
  pro4!:FormControl;
  pro5!:FormControl;
  pro6!:FormControl;
  
  contra1!:FormControl;
  contra2!:FormControl;
  contra3!:FormControl;
  contra4!:FormControl;
  contra5!:FormControl;
  contra6!:FormControl;
  
  imagen1!:string;
  imagen2!:string;
  imagen3!:string;
  imagen4!:string;
  imagen5!:string;
  imagen6!:string;
  imagen7!:string;
  imagen8!:string;
  
  remainingChars:number = 1000;

  envioFormDataJuguete!:FormData;
    
  
  constructor(
      private activatedRoute: ActivatedRoute,
      private router:Router,
      private formBuilder: FormBuilder,
      private store:Store<AppState>,
      private treeService: TreeService,

  ) { 



      this.envioFormDataJuguete = new FormData();
      this.jugueteId = this.activatedRoute.snapshot.paramMap.get('id')||"";
      
      this.isUpdateMode = ( this.jugueteId ) ? true : false; 

      this.tituloJuguete = new FormControl('juguete1', [ Validators.required, Validators.maxLength(255) ]);
      this.precioJuguete = new FormControl(55.0, [ Validators.required, Validators.min(0) ] );
      this.descripcion = new FormControl ('description del juguete', [ Validators.required, Validators.maxLength(3500) ]);
      
      this.pro1 = new FormControl(false );
      this.pro2 = new FormControl(false );
      this.pro3 = new FormControl(false );
      this.pro4 = new FormControl(false );
      this.pro5 = new FormControl(false);
      this.pro6 = new FormControl(false );

      this.contra1 = new FormControl(false);
      this.contra2 = new FormControl(false );
      this.contra3 = new FormControl(false);
      this.contra4 = new FormControl(false);
      this.contra5 = new FormControl(false);
      this.contra6 = new FormControl(false);
      
      this.categorias = new FormControl('', [Validators.required]);
      this.subcategorias1 = new FormControl('', [Validators.required]);
      this.subcategorias2 = new FormControl('',[Validators.required]);

      this.marcas = new FormControl('', [Validators.required]);
      this.materiales = new FormControl('',[Validators.required]);
      this.edad = new FormControl('',[Validators.required]);
      
      this.ancho = new FormControl('', [ Validators.required, Validators.maxLength(4) ]);
      this.largo = new FormControl('', [ Validators.required, Validators.maxLength(4) ]);
      this.alto = new FormControl('', [ Validators.required, Validators.maxLength(4) ]);
      this.publicado = new FormControl(false, [ Validators.required ]);

      this.puntuacion = new FormControl(10, [Validators.required, Validators.min(0) ]);
      this.num_votaciones = new FormControl(100, [Validators.required , Validators.min(0)  ]);


      this.loadMarcas();
      this.loadMateriales();
      this.loadEdades();
      //this.loadCategorias();
      
      this.jugueteForm = this.formBuilder.group({

        tituloJuguete: this.tituloJuguete,
        descripcion: this.descripcion,
        precio: this.precioJuguete,

        marca: this.marcas,
        material: this.materiales,
        edad: this.edad,

        ancho: this.ancho,
        largo: this.largo,
        alto: this.alto,

        categorias: this.categorias,
        subcategorias1: this.subcategorias1,
        subcategorias2: this.subcategorias2,

        puntuacion: this.puntuacion,
        num_votaciones: this.num_votaciones,
        
        
        pro1: this.pro1,
        pro2: this.pro2,
        pro3: this.pro3,
        pro4: this.pro4,
        pro5: this.pro5,
        pro6: this.pro6,

        contra1: this.contra1,
        contra2: this.contra2,
        contra3: this.contra3,
        contra4: this.contra4,
        contra5: this.contra5,
        contra6: this.contra6,

        publicado: this.publicado, 
      });


      this.store.select('jugueteAdmin').subscribe({

        next:(jugueteAdminState:JugueteAdminState) => {

          if(jugueteAdminState.juguete) {

            this.arrayCategorias = jugueteAdminState.categorias;
            //Obtenemos categorias en forma de arbol
            this.treeCategorias = this.treeService.creaArbolFromCategorias(this.arrayCategorias);
            this.categoriasListaRenderizable = this.treeService.loadHijosFromNodo('Categorías', this.treeCategorias);
            
            this.juguete = jugueteAdminState.juguete;

            this.tituloJuguete.setValue(this.juguete.titulo);
            this.descripcion.setValue(this.juguete.descripcion);
            this.precioJuguete.setValue(this.juguete.precio);
            
            this.pro1.setValue(this.juguete.pro1);
            this.pro2.setValue(this.juguete.pro2);
            this.pro3.setValue(this.juguete.pro3);
            this.pro4.setValue(this.juguete.pro4);
            this.pro5.setValue(this.juguete.pro5);
            this.pro6.setValue(this.juguete.pro6);

            this.contra1.setValue(this.juguete.contra1);
            this.contra2.setValue(this.juguete.contra2);
            this.contra3.setValue(this.juguete.contra3);
            this.contra4.setValue(this.juguete.contra4);
            this.contra5.setValue(this.juguete.contra5);
            this.contra6.setValue(this.juguete.contra6);
           
            this.marcas.setValue(this.juguete.marca);
            this.materiales.setValue(this.juguete.material);
            this.edad.setValue(this.juguete.edad);
            
            this.ancho.setValue(this.juguete.ancho);
            this.largo.setValue(this.juguete.largo);
            this.alto.setValue(this.juguete.alto);

            this.puntuacion.setValue(this.juguete.puntuacion);
            this.num_votaciones.setValue(this.juguete.num_votaciones);

            this.publicado.setValue((this.juguete.publicado) ? true: false);

            //estas vars son para que cuando seleccionemos una imagen, cambie
            //el nombre en la interfaz de usuario.
            this.imagen1 = this.juguete.imagen1;
            this.imagen2 = this.juguete.imagen2;
            this.imagen3 = this.juguete.imagen3;
            this.imagen4 = this.juguete.imagen4;
            this.imagen5 = this.juguete.imagen5;
            this.imagen6 = this.juguete.imagen6;
            this.imagen7 = this.juguete.imagen7;
            this.imagen8 = this.juguete.imagen8;

            //this.loadCategorias();
            
            this.categorias.setValue(this.juguete.categoria?.nombre_categoria);

            //Llenamos la lista y seteamos el valor que viene de base de datos.
            this.obtenerSubcategorias1(this.juguete.categoria ? this.juguete.categoria.nombre_categoria : '');
            this.subcategorias1.setValue(this.juguete.categoria ? this.juguete.categoria.subcategoria1 : '' );

            this.obtenerSubcategorias2(this.juguete.categoria ? this.juguete.categoria.subcategoria1 : '');
            this.subcategorias2.setValue(this.juguete.categoria ? this.juguete.categoria.subcategoria2 : '');

            this.jugueteForm = this.formBuilder.group({
              
              tituloJuguete: this.tituloJuguete,
              precioJuguete: this.precioJuguete,
              descripcion: this.descripcion,

              marcas: this.marcas,
              materiales: this.materiales,
              edad:this.edad,
              
              ancho: this.ancho,
              largo: this.largo,
              alto: this.alto,

              categorias: this.categorias,
              subcategorias1: this.subcategorias1,
              subcategorias2:this.subcategorias2,

              puntuacion: this.puntuacion,
              num_votaciones: this.num_votaciones,

              pro1: this.pro1,
              pro2: this.pro2,
              pro3: this.pro3,
              pro4: this.pro4,
              pro5: this.pro5,
              pro6: this.pro6,
              contra1: this.contra1,
              contra2: this.contra2,
              contra3: this.contra3,
              contra4: this.contra4,
              contra5: this.contra5,
              contra6: this.contra6,
              publicado:this.publicado,

            });
          }    
        } 
      });
  }


  ngOnInit(): void {
    
    this.store.dispatch(juguetesAdminActions.getAllCategorias());
    if (this.isUpdateMode) {
      this.store.dispatch(juguetesAdminActions.getJugueteById({idJuguete:this.jugueteId}));
    } 
  }




  private loadMarcas():void {
    this.marcasLista = [{id:1, nombre:"Lego"}, {id:2, nombre: "Playmobil"},  {id:3, nombre: "Mattel"}, {id:4, nombre: "KidKraft"}, {id:5 ,nombre: "Barbie"}]
  }

  private loadMateriales():void {
    this.materialesLista = [{id:1, nombre:"Madera"}, {id:2, nombre: "Hierro"},  {id:3, nombre: "Plástico"}]
  }

  private loadEdades():void {
    this.edadesLista = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  }



  obtenerSubcategorias1(opcionSeleccionadaCategoria:string):void {

    //let nodoClicado:string = (opcionSeleccionadaCategoria)? opcionSeleccionadaCategoria : this.categorias.value; 
    this.categorias.setValue(opcionSeleccionadaCategoria);
    let nodoClicado = opcionSeleccionadaCategoria;
    this.subcategorias1ListaRenderizable = this.treeService.loadHijosFromNodo(nodoClicado, this.treeCategorias);

  }

  obtenerSubcategorias2(opcionSeleccionadaSubCategoria1:string):void {
    
    //let nodoClicado:string = (opcionSeleccionadaSubCategoria1)? opcionSeleccionadaSubCategoria1 : this.subcategorias1.value; 
    this.subcategorias1.setValue(opcionSeleccionadaSubCategoria1);
    let nodoClicado = opcionSeleccionadaSubCategoria1;
    this.subcategorias2ListaRenderizable = this.treeService.loadHijosFromNodo(nodoClicado, this.treeCategorias);
  
  }

  setValorSubCat2(opcionSeleccionadaSubCategoria2:string):void {

    this.subcategorias2.setValue(opcionSeleccionadaSubCategoria2);

  }


  updateJuguete() {
    this.store.dispatch(juguetesAdminActions.updateJuguete({juguete:this.envioFormDataJuguete}));
  }


  anyadirJuguete(){
    this.store.dispatch(juguetesAdminActions.createJuguete({juguete:this.envioFormDataJuguete}));
  }


  saveJuguete():void {
  
    let idCategoria:string = this.obtenerIdCategoria(<string>this.categorias.value, <string>this.subcategorias1.value, <string>this.subcategorias2.value );
    console.log("Categoria ID Seleccionada: ", idCategoria);


    if (this.isUpdateMode) {
      this.envioFormDataJuguete.append("id", <string>this.jugueteId.toString());
    }

    this.envioFormDataJuguete.append("titulo", <string>this.tituloJuguete.value);
    this.envioFormDataJuguete.append("descripcion",<string>this.descripcion.value,);
    this.envioFormDataJuguete.append("precio", this.precioJuguete.value.toString());

    this.envioFormDataJuguete.append("marca",<string>this.marcas.value);
    this.envioFormDataJuguete.append("material", <string>this.materiales.value);
    this.envioFormDataJuguete.append("edad", this.edad.value.toString());

    this.envioFormDataJuguete.append("ancho", <string> this.ancho.value);
    this.envioFormDataJuguete.append("largo", <string> this.largo.value);
    this.envioFormDataJuguete.append("alto", <string> this.alto.value);

    this.envioFormDataJuguete.append("puntuacion", <string>this.puntuacion.value.toString() );
    this.envioFormDataJuguete.append("num_votaciones",<string>this.num_votaciones.value.toString());

    this.envioFormDataJuguete.append("pro1", <string> ( (<boolean>this.pro1.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("pro2", <string> ( (<boolean>this.pro2.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("pro3", <string> ( (<boolean>this.pro3.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("pro4", <string> ( (<boolean>this.pro4.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("pro5", <string> ( (<boolean>this.pro5.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("pro6", <string> ( (<boolean>this.pro6.value) ? '1' : '0'));

    this.envioFormDataJuguete.append("contra1", ( (<boolean>this.contra1.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("contra2", ( (<boolean>this.contra2.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("contra3", ( (<boolean>this.contra3.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("contra4", ( (<boolean>this.contra4.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("contra5", ( (<boolean>this.contra5.value) ? '1' : '0'));
    this.envioFormDataJuguete.append("contra6", ( (<boolean>this.contra6.value) ? '1' : '0'));

    this.envioFormDataJuguete.append("path_imagen", idCategoria);

    this.envioFormDataJuguete.append("publicado", ( (<boolean>this.publicado.value) ? '1' : '0'));

    this.envioFormDataJuguete.append("categoria_id",idCategoria.toString());
    
       
    
    if (this.isUpdateMode) {
      this.updateJuguete();
    } else {
      this.anyadirJuguete();
    }


  }


  obtenerIdCategoria(categoria:string, subcategoria1:string, subcategoria2:string):string {


    let idCategoria = '';

    let categoriaAux;
    let subcategoria1Aux;
    let subcategoria2Aux;

    for (let i=0; i< this.arrayCategorias.length; i++ ){

      categoriaAux = this.arrayCategorias[i].nombre_categoria;
      subcategoria1Aux = this.arrayCategorias[i].subcategoria1;
      subcategoria2Aux = this.arrayCategorias[i].subcategoria2;

      
      if (categoriaAux === categoria) {
        if (subcategoria1Aux === subcategoria1) {
          if (subcategoria2Aux === subcategoria2 ) 
            return this.arrayCategorias[i].id;
        }
      }
    }  
    return idCategoria;
  }


  
  imagenCargada(imagenFile:File, numero_imagen:string):void {

    if (imagenFile) {

      //Empezamos a preparar el formdata de envio
      this.envioFormDataJuguete.append('imagen' + numero_imagen , imagenFile);

      if (numero_imagen == '1') {
            this.imagen1 = imagenFile.name;

      } else if (numero_imagen == '2') {
            this.imagen2 = imagenFile.name;

      } else if (numero_imagen == '3') {
            this.imagen3 = imagenFile.name;

      } else if (numero_imagen == '4') {
            this.imagen4 = imagenFile.name;

      } else if (numero_imagen == '5') {  
            this.imagen5 = imagenFile.name;

      } else if (numero_imagen == '6') {
            this.imagen6 = imagenFile.name;

      } else if (numero_imagen == '7') {
            this.imagen7 = imagenFile.name;

      } else {
            this.imagen8 = imagenFile.name;
      }
    }

  }


  charCounter():void {
    this.remainingChars = this.descripcion.value ? 3000 - this.descripcion.value.length : 3000;
  }

  
}