import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciasRoutingModule } from './experiencias-routing.module';
import { ExperienciaBlogComponent } from '../components/experiencia-blog/experiencia-blog.component';
import { ExperienciaDetalleComponent } from '../components/experiencia-detalle/experiencia-detalle.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormatDateModule } from 'src/app/shared/modules/format-date.module';
import { MostrarImagenDefectoModule } from 'src/app/shared/modules/mostrar-imagen-defecto.module';


@NgModule({
  declarations: [
    ExperienciaBlogComponent,
    ExperienciaDetalleComponent,
  ],
  imports: [
    CommonModule,
    FormatDateModule,
    MostrarImagenDefectoModule,
    MatProgressSpinnerModule,
    ExperienciasRoutingModule
  ]
})
export class ExperienciasModule { }
