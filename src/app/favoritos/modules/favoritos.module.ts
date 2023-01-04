import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosComponent } from '../components/favoritos/favoritos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MostrarImagenDefectoModule } from 'src/app/shared/modules/mostrar-imagen-defecto.module';
import { FormatDateModule } from 'src/app/shared/modules/format-date.module';



@NgModule({
  declarations: [
    FavoritosComponent,
  ],
  imports: [
    CommonModule,
    MostrarImagenDefectoModule,
    FormatDateModule,
    MatProgressSpinnerModule,
    FavoritosRoutingModule,
    

  ]
})
export class FavoritosModule { }
