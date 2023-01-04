import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugueteAdminRoutingModule } from './juguete-admin-routing.module';
import { JugueteFormComponent } from '../components/juguete-form/juguete-form.component';
import { JugueteListadoComponent } from '../components/juguete-listado/juguete-listado.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MostrarImagenDefectoModule } from 'src/app/shared/modules/mostrar-imagen-defecto.module';
import { FormatDateModule } from 'src/app/shared/modules/format-date.module';
import { FileUploadModule } from 'src/app/shared/modules/file-upload.module';



@NgModule({
  declarations: [
    JugueteFormComponent,
    JugueteListadoComponent,
  ],
  imports: [
    JugueteAdminRoutingModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FileUploadModule,
    MostrarImagenDefectoModule,
    FormatDateModule,
    CommonModule
  ]
})
export class JugueteAdminModule { }
