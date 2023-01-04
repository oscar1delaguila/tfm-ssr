import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaBlogComponent } from '../components/experiencia-blog/experiencia-blog.component';
import { ExperienciaDetalleComponent } from '../components/experiencia-detalle/experiencia-detalle.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { 
    path: '', 
    component: ExperienciaBlogComponent,
  },
  { 
    path: ':id', 
    component: ExperienciaBlogComponent,
  },
  { 
    path: 'detalle/:id', 
    component: ExperienciaDetalleComponent, 
  },

];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ExperienciasRoutingModule { }
