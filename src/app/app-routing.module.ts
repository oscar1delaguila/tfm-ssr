import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarantiasComponent } from './garantias/garantias.component';


const routes: Routes = [


/*
  {
    path: 'inicio', 
    component: InicioComponent,
  },
  */
/*
  {
    path: 'listado', 
    component: JugueteListadoComponent,
    canActivate: [AuthGuard],     
  },
*/
/*
  {
    path: 'favoritos', 
    component: FavoritosComponent,
    canActivate: [AuthGuard],     
  },
*/
/*
  {
    path: 'login', 
    component: LoginComponent,
  },

  {
    path: 'register', 
    component: RegisterComponent,
  },
*/
/*
  {
    path: 'perfil', 
    component: PerfilComponent,
    canActivate: [AuthGuard],     
  },

  { 
    path: 'experiencias-listado',  
    component: ExperienciaListadoComponent,
    canActivate: [AuthGuard],     
  },
*/
 /*
  { 
    path: 'experiencias',  
    component: ExperienciaBlogComponent
  },

  { 
    path: 'experiencias/:id',  
    component: ExperienciaBlogComponent
  },

  { 
    path: 'experiencia/:id', 
    component: ExperienciaDetalleComponent 
  },
*/
/*
  {
    path: 'experiencia-form/:id',  
    component: ExperienciaFormComponent,
    canActivate: [AuthGuard],     
  },
*/
/*
  { 
    path: 'juguetes', 
    component: JugueteCatalogoComponent, 
  },

  { 
    path: 'juguetes/:id', 
    component: JugueteCatalogoComponent, 
  },

  { 
    path: 'juguete/:id', 
    component: JugueteDetalleComponent 
  },
*/
/*
  {
    path: 'juguete-form/:id', 
    component: JugueteFormComponent,
    canActivate: [AuthGuard],     
  },
*/

  {
    path: 'garantias', 
    component: GarantiasComponent,
  },
  { 
    path: 'inicio', 
    loadChildren: () => import('./inicio/modules/inicio.module').then(m => m.InicioModule) 
  },
  { 
    path: 'favoritos', 
    loadChildren: () => import('./favoritos/modules/favoritos.module').then(m => m.FavoritosModule) 
  },
  { 
    path: 'juguetes', 
    loadChildren: () => import('./juguete/modules/juguete.module').then(m => m.JugueteModule) 
  },
  { 
    path: 'juguetes-listado', 
    loadChildren: () => import('./juguete-admin/modules/juguete-admin.module').then(m => m.JugueteAdminModule) 
  },
  { 
    path: 'experiencias', 
    loadChildren: () => import('./experiencias/modules/experiencias.module').then(m => m.ExperienciasModule) 
  },
  { 
    path: 'experiencias-listado', 
    loadChildren: () => import('./experiencias-admin/modules/experiencias-admin.module').then(m => m.ExperienciasAdminModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./auth/modules/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./usuario/modules/register.module').then(m => m.RegisterModule) 
  },
  { 
    path: 'perfil', 
    loadChildren: () => import('./usuario/modules/perfil.module').then(m => m.PerfilModule) 
  },
  { 
    path: '', 
    loadChildren: () => import('./inicio/modules/inicio.module').then(m => m.InicioModule), 
  }, 

  { 
    path: '**', 
    loadChildren: () => import('./inicio/modules/inicio.module').then(m => m.InicioModule) 
  }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
