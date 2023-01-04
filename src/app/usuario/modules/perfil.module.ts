import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PerfilRoutingModule } from './perfil-routing.module';



@NgModule({
  declarations: [
    PerfilComponent,
  ],
  imports: [

    CommonModule,
    PerfilRoutingModule,    
    ReactiveFormsModule,        
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ]
})
export class PerfilModule { }
