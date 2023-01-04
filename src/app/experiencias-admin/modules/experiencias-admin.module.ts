import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciasAdminRoutingModule } from './experiencias-admin-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExperienciaListadoComponent } from '../components/experiencia-listado/experiencia-listado.component';
import { ExperienciaFormComponent } from '../components/experiencia-form/experiencia-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadModule } from 'src/app/shared/modules/file-upload.module';
import { MostrarImagenDefectoModule } from 'src/app/shared/modules/mostrar-imagen-defecto.module';
import { FormatDateModule } from 'src/app/shared/modules/format-date.module';



@NgModule({
  declarations: [
    ExperienciaFormComponent,
    ExperienciaListadoComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    MostrarImagenDefectoModule,
    FormatDateModule,
    MatProgressSpinnerModule,
    ExperienciasAdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class ExperienciasAdminModule { }
