import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugueteCatalogoComponent } from '../components/juguete-catalogo/juguete-catalogo.component';
import { JugueteRoutingModule } from './juguete-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriasTreeComponent } from '../components/categorias-tree/categorias-tree.component';
import { JugueteDetalleComponent } from '../components/juguete-detalle/juguete-detalle.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MostrarImagenDefectoModule } from 'src/app/shared/modules/mostrar-imagen-defecto.module';


@NgModule({
  declarations: [
    JugueteDetalleComponent,
    JugueteCatalogoComponent,
    CategoriasTreeComponent,
  ],
  imports: [
    CommonModule,
    MostrarImagenDefectoModule,
    JugueteRoutingModule,
    MatProgressSpinnerModule,    
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
  ]
})
export class JugueteModule { }
