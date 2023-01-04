import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.interface';
import { ConfirmPasswordValidator } from 'src/app/shared/directivas/match-passwords.directive';
import { ToastService } from 'src/app/shared/services/toast.service';


import * as userActions from '../../actions/index';
import { AuthState } from 'src/app/auth/reducers';
import { AppState } from 'src/app/app.reducers';
import { UserState } from '../../reducers';




@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  hide:boolean = true;

  user_id!:string;
  usuario!:Usuario;
  perfilForm!: FormGroup;
  
  email!:FormControl;
  nombre!:FormControl;
  apellidos!:FormControl; 
  fechaNacimiento!: FormControl;
  newsletter!: FormControl;

  newPassword!:FormControl;
  newPasswordRepeat!: FormControl;

  constructor(

    private formBuilder: FormBuilder,
    private router:Router,
    private store: Store<AppState>,
    private toastService:ToastService

  ) {


    this.store.select('auth').subscribe({
      next:(authState:AuthState) => {
        this.user_id = authState.auth.user_id;
      }
    });


    this.email = new FormControl('', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$') ]);
    this.nombre = new FormControl('', [ Validators.required, Validators.maxLength(100), Validators.minLength(2) ]);
    this.apellidos = new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2) ]);
    this.fechaNacimiento = new FormControl( new Date(),[ Validators.required ] );
    this.newsletter = new FormControl();
    this.newPassword = new FormControl('', [Validators.maxLength(16), Validators.minLength(6)]);
    this.newPasswordRepeat = new FormControl('', [ Validators.maxLength(16), Validators.minLength(6)]);

    this.perfilForm = this.formBuilder.group({
      
      nombre: this.nombre,
      apellidos: this.apellidos,
      fechaNacimiento: this.fechaNacimiento,
      email: this.email,
      newsletter: this.newsletter,
      newPassword: this.newPassword,
      newPasswordRepeat: this.newPasswordRepeat

    },
    {
      validator: ConfirmPasswordValidator("newPassword", "newPasswordRepeat")
    }
    );

    this.store.select('user').subscribe({
      next:(userState:UserState) => {

        this.usuario = userState.user;
        this.nombre.setValue(this.usuario.nombre);
        this.email.setValue(this.usuario.email);
        this.apellidos.setValue(this.usuario.apellidos);
        this.newsletter.setValue(this.usuario.newsletter);
        this.fechaNacimiento.setValue(formatDate(this.usuario.birth_date, 'yyyy-MM-dd', 'en'));
        //PRINT
  
        this.perfilForm = this.formBuilder.group({
          nombre: this.nombre,
          apellidos: this.apellidos,
          newsletter: this.newsletter,
          fechaNacimiento: this.fechaNacimiento,
          email: this.email,
          newPassword: this.newPassword,
          newPasswordRepeat: this.newPasswordRepeat
        },
        {
          validator: ConfirmPasswordValidator("newPassword", "newPasswordRepeat")
        });
  

      }
    });

   }

  ngOnInit(): void {

      this.store.dispatch(userActions.getUserById( { userId: this.user_id }));

  }


  actualizaPerfil():void {

    this.usuario = {

      email: this.perfilForm.controls.email.value,
      nombre : this.perfilForm.controls.nombre.value,
      apellidos : this.perfilForm.controls.apellidos.value,
      birth_date : this.perfilForm.controls.fechaNacimiento.value,
      newsletter :((<boolean>this.newsletter.value) ? true : false), 
      newPassword : this.perfilForm.controls.newPassword.value ? this.perfilForm.controls.newPassword.value : '',
      
    }

    this.store.dispatch(userActions.updateUser({userId: this.user_id, user: this.usuario}));
  }

}
