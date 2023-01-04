import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarImagenDefectoPipe } from '../pipes/mostrar-imagen-defecto.pipe';



@NgModule({
  declarations: [

    MostrarImagenDefectoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MostrarImagenDefectoPipe
  ]
})
export class MostrarImagenDefectoModule { }
