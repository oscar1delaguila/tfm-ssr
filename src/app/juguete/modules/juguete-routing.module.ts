import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugueteCatalogoComponent } from '../components/juguete-catalogo/juguete-catalogo.component';
import { JugueteDetalleComponent } from '../components/juguete-detalle/juguete-detalle.component';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { 
    path: '', 
    component: JugueteCatalogoComponent,
  },
  { 
    path: ':id', 
    component: JugueteCatalogoComponent,
  },
  { 
    path: 'detalle/:id', 
    component: JugueteDetalleComponent, 
  },


];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class JugueteRoutingModule { }
