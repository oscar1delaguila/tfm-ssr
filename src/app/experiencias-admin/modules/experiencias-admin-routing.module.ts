import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaFormComponent } from '../components/experiencia-form/experiencia-form.component';
import { ExperienciaListadoComponent } from '../components/experiencia-listado/experiencia-listado.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';



const routes: Routes = [

  { 
    path: '',  
    component: ExperienciaListadoComponent,
    canActivate: [AuthGuard],     
  },
  {
    path: 'form/:id',  
    component: ExperienciaFormComponent,
    canActivate: [AuthGuard],     
  },

  
];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ExperienciasAdminRoutingModule { }
