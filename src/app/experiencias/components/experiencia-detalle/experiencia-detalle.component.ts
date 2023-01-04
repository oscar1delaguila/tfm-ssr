import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Experiencia } from 'src/app/shared/models/experiencia.interface';
import * as varGlobals from '../../../globals';
import { ExperienciaState } from '../../reducer';
import * as experienciasActions from '../../actions/experiencias.actions';

@Component({
  selector: 'app-experiencia-detalle',
  templateUrl: './experiencia-detalle.component.html',
  styleUrls: ['./experiencia-detalle.component.css']
})
export class ExperienciaDetalleComponent implements OnInit {


  loaded:boolean = false;
  experiencia!: Experiencia; 
  idExperiencia!:string;
  trustedUrl!:SafeUrl;
  server!:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private store:Store<AppState> ,
    private sanitizer:DomSanitizer


  ) { 

      this.server = varGlobals.server + varGlobals.sep + 'Experiencias';
      this.idExperiencia = this.activatedRoute.snapshot.paramMap.get('id')||"";

      this.store.select('experiencia').subscribe({
        next:(experienciaState: ExperienciaState ) => {

          this.experiencia = experienciaState.experiencia;
          let dangerousUrl:string = this.server + '/' + this.experiencia.user_id +'/'+ this.experiencia.id +'/'+ this.experiencia.imagen_experiencia;
          this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
          this.loaded = experienciaState.loaded;

        }
      });


  }

  ngOnInit(): void {
    this.store.dispatch(experienciasActions.getExperienciaById({idExperiencia:this.idExperiencia }))
  }

}
