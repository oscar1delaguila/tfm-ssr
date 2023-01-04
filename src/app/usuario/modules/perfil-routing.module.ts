import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PerfilComponent } from '../components/perfil/perfil.component';


const routes: Routes = [
  {
    path: '', 
    component: PerfilComponent,
    canActivate: [AuthGuard],     
  },
  ];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PerfilRoutingModule { }
