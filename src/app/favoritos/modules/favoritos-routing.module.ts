import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from '../components/favoritos/favoritos.component';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { 
    path: '', 
    component: FavoritosComponent,
  },
];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FavoritosRoutingModule { }
