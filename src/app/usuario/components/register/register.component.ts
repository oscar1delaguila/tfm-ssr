import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.interface';
import { ConfirmPasswordValidator } from 'src/app/shared/directivas/match-passwords.directive';
import { ToastService } from 'src/app/shared/services/toast.service';
import * as varGlobals from '../../../globals';
import * as userActions from '../../../usuario/actions/user.action';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Auth } from 'src/app/auth/models/auth.interface';
import { UserState } from '../../reducers';
import { AppState } from 'src/app/app.reducers';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  hide:boolean = true;

  usuario!: Usuario;
  registerForm!: FormGroup;

  nombre!:FormControl;
  apellidos!:FormControl; 
  fechaNacimiento!: FormControl;

  email!:FormControl;
  password!:FormControl;
  passwordRepetido!: FormControl;
  newsletter:FormControl;

  p1!:string;
  p2!:string;

  constructor(

    private formBuilder: FormBuilder,
    private router:Router,
    private serviceLocalStorage: LocalStorageService,
    private toastService: ToastService,
    private store:Store<AppState>

  ) {
        this.email = new FormControl('', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$') ]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), ]);
        this.passwordRepetido = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]);
        this.nombre = new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(100), ]);
        this.apellidos = new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(100), ]);
        this.newsletter = new FormControl();
        this.fechaNacimiento = new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'),[ Validators.required ] );

        this.registerForm = this.formBuilder.group({
          
          nombre: this.nombre,
          fechaNacimiento: this.fechaNacimiento,
          apellidos: this.apellidos,
          email: this.email,
          password: this.password,
          passwordRepetido: this.passwordRepetido,

        },
        {
          validator: ConfirmPasswordValidator("password", "passwordRepetido")
        }
        );


        this.store.select('user').subscribe({
          next:(userState:UserState) => {
            this.usuario = userState.user;
          }
        });

   }

  ngOnInit(): void {
  }


  register():void {

  
    this.usuario = {

      password: this.registerForm.controls.password.value,
      email: this.registerForm.controls.email.value,
      nombre : this.registerForm.controls.nombre.value,
      apellidos : this.registerForm.controls.apellidos.value,
      birth_date : this.registerForm.controls.fechaNacimiento.value,
      newsletter :((<boolean>this.newsletter.value) ? true : false), 

    }

    //Print 
    console.log('Usuario a registrar ', this.usuario);

    this.store.dispatch(userActions.register({user: this.usuario}));

  }

}
