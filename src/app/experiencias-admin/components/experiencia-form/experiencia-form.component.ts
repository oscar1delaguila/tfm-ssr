import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { AppState } from 'src/app/app.reducers';

import { Auth } from 'src/app/auth/models/auth.interface';
import { AuthState } from 'src/app/auth/reducers';

import { Experiencia } from 'src/app/shared/models/experiencia.interface';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ExperienciaAdminState } from '../../reducer';
import * as experienciasActions from '../../actions/experiencias-admin.actions';
import { JugueteTituloId } from 'src/app/shared/models/juguete-titulo-id.interface';


@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.scss']
})
export class ExperienciaFormComponent implements OnInit {

  
  userId!:number;
  isAdmin!:boolean;

  juguete_id!:number;

  private isUpdateMode!: boolean;
  experiencia!:Experiencia;
  experienciaId!: string;
  loaded!: boolean;

  experienciaForm!: FormGroup;
  
  juguetesTitulos!:FormControl;
  juguetesCompradosLista!: JugueteTituloId[];

  titulo!: FormControl;
  publicado!:FormControl;
  descripcion!: FormControl;
  fechaPublicacion!: FormControl;
  valoracion!:FormControl;

  experiencia_imagen!:string;
  envioFormDataExperiencia!:FormData;

  remainingChars:number = 1000;


  constructor(
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder,
      private router:Router,
      private store: Store<AppState> 
  ) { 


    

    this.loaded = false;
    this.experiencia_imagen ='';
    this.envioFormDataExperiencia = new FormData();

    this.experienciaId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.isUpdateMode = ( this.experienciaId ) ? true : false; 

    
    this.titulo = new FormControl('', [ Validators.required, Validators.maxLength(255) ]);
    this.descripcion = new FormControl ('', [ Validators.required, Validators.maxLength(1000) ]);
    this.publicado = new FormControl( false , [ Validators.required ] );
    this.juguetesTitulos = new FormControl('', [Validators.required]);
    this.valoracion = new FormControl(0,[ Validators.required, Validators.max(10), Validators.min(0) ]);
    
    //this.fechaPublicacion = new FormControl(new Date(),[ Validators.required ]);

    this.loadTitulosJuguetesComprados();
  
    this.experienciaForm = this.formBuilder.group({

      titulo: this.titulo,
      descripcion: this.descripcion,
      juguetesTitulos: this.juguetesCompradosLista,
      publicado: this.publicado,
      valoracion:this.valoracion,
      
    });

    this.store.select('auth').subscribe({
      next:(authState:AuthState) => {
        this.userId = Number.parseInt(authState.auth.user_id);
        this.isAdmin = authState.auth.isAdmin;
      }
    });



      this.store.select('experienciaAdmin').subscribe({

        next:(experienciaAdminState:ExperienciaAdminState) => {

          this.juguetesCompradosLista = experienciaAdminState.titulosAllJuguetes;

            this.experiencia = experienciaAdminState.experiencia;
            

            this.titulo.setValue(<string> this.experiencia.titulo );
            this.descripcion.setValue(<string>this.experiencia.descripcion);
            this.publicado.setValue(this.experiencia.publicado);
            this.juguetesTitulos.setValue(this.experiencia.juguete_id);
            this.valoracion.setValue(this.experiencia.valoracion);

            //el valor de esta variable se la pasamos al componente hijo de file-upload
            this.experiencia_imagen = this.experiencia.imagen_experiencia;

            //this.fechaPublicacion.setValue(formatDate(experiencia.fecha_publicacion, 'yyyy-MM-dd' , 'en' ));

            this.experienciaForm = this.formBuilder.group({
              titulo: this.titulo,
              descripcion: this.descripcion,
              juguetesTitulos:this.juguetesTitulos,
              publicado: this.publicado,
              valoracion:this.valoracion
              
            });
        }

      });
      
  }

  loadTitulosJuguetesComprados():void{
    this.store.dispatch(experienciasActions.getAllTitulosJuguetes());
  }

  ngOnInit(): void {

    if (this.isUpdateMode) {
      this.store.dispatch(experienciasActions.getExperienciaByIdAdmin({idExperiencia:this.experienciaId}));
    }
  }



  updateExperiencia():void {
    this.store.dispatch(experienciasActions.updateExperiencia({experiencia:this.envioFormDataExperiencia}));
  }


  addExperiencia():void {
    this.store.dispatch(experienciasActions.createExperiencia({experiencia:this.envioFormDataExperiencia}));
  }

  saveExperiencia():void {
      
      //preparamos el formdata para enviar al backend
      if (this.isUpdateMode){
        this.envioFormDataExperiencia.append("id", this.experienciaId || '');
      }
      this.envioFormDataExperiencia.append("titulo", <string>this.titulo.value);
      this.envioFormDataExperiencia.append("descripcion", <string>this.descripcion.value);
      this.envioFormDataExperiencia.append("user_id", this.userId.toString() );
      this.envioFormDataExperiencia.append("juguete_id", <string>this.juguetesTitulos.value);
      this.envioFormDataExperiencia.append("publicado", ( (<boolean>this.publicado.value) ? '1' : '0'));
      this.envioFormDataExperiencia.append("valoracion", this.valoracion.value.toString());
      this.envioFormDataExperiencia.append("fecha_publicacion", formatDate(new Date(), 'yyyy-MM-dd', 'en'));
      this.envioFormDataExperiencia.append("imagen_experiencia", this.experiencia_imagen);
      
           
    
      if (this.isUpdateMode) {
        this.updateExperiencia();
      } else {
        this.addExperiencia();
      }

  }


  imagenCargada(imagenFile:File):void {

    if (imagenFile) {

      //Empezamos a preparar el formdata de envio
      this.envioFormDataExperiencia.append("thumbnail", imagenFile);
      //this.envioFormDataExperiencia.append("filename", imagenFile.name);

      //el valor de esta variable se la pasamos al componente hijo de file-upload
      this.experiencia_imagen = imagenFile.name;

    }  

  }


  wordCounter() {
    this.remainingChars = this.descripcion.value ? 1000 - this.descripcion.value.length : 1000;
  }
/*
  jugueteSeleccionado() {

    this.juguete_id = Number.parseInt(this.juguetesTitulos.value);
    console.log("Juguete seleccionado: " , this.juguete_id);

  }
*/

}
