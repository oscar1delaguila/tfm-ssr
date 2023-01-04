import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JugueteListadoComponent } from '../components/juguete-listado/juguete-listado.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { JugueteFormComponent } from '../components/juguete-form/juguete-form.component';




const routes: Routes = [

  { 
    path: '',  
    component: JugueteListadoComponent,
    canActivate: [AuthGuard],     
  },
  {
    path: 'form/:id',  
    component: JugueteFormComponent,
    canActivate: [AuthGuard],     
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugueteAdminRoutingModule { }
