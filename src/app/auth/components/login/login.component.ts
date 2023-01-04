import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as authActions from '../../actions/auth.action';
import * as varGlobals from '../../../globals';

import { timer } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Auth } from '../../models/auth.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthState } from '../../reducers';
import { AppState } from 'src/app/app.reducers';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  hide:boolean =true;
  credentials!:Auth;
  loginForm!: FormGroup;
  email!:FormControl;
  password!:FormControl;
  userId:string = '';
  isAdmin:boolean = false;

  constructor(

    private formBuilder: FormBuilder,
    private router:Router,
    private serviceLocalStorage: LocalStorageService,
    private store: Store<AppState>,
    private toastService:ToastService,

  ) {


    this.store.select('auth').subscribe({
      next:(authState:AuthState) => {
        this.userId = authState.auth.user_id;
        this.isAdmin = authState.auth.isAdmin;
      }
    });


    this.email = new FormControl('', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$') ]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), ]);


    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });



   }

  ngOnInit(): void {
  }


  login() {

    this.credentials = {
      password: this.loginForm.controls.password.value,
      email: this.loginForm.controls.email.value,
      user_id:'',
      isAdmin: false,
      access_token:''
    }


    this.store.dispatch(authActions.login({credentials: this.credentials}));
/*
    this.sesionService.login(this.usuario).subscribe({

      next:(userLogged:Usuario) => {
          //PRINT
          console.log('Usuario logado: ', userLogged);
          //Si el login es correcto almacenamos el token en el navegador.
          this.serviceLocalStorage.set('access_token', (userLogged.access_token) ? userLogged.access_token : '' );
          this.serviceLocalStorage.set('user_id', (userLogged.id) ? userLogged.id : '' );
          this.store.dispatch(actions.login({user_id:userLogged.id || '', token:userLogged.access_token || ''}));
          
          if (varGlobals.emailAdmin == userLogged.email){
            this.serviceLocalStorage.set('user_admin', 'yes' );
            this.store.dispatch(actions.isTheAdmin({ isAdmin: true }));
          }  

          this.toastService.managementToast('postFeedback', true, 'Login:  ');

          timer(3000).subscribe({
            next:(value:number) => {
              if (value == 0) {
                  let toastMsg = <HTMLSpanElement>document.getElementById('postFeedback');
                  toastMsg.style.display = 'none';            
                  this.router.navigateByUrl('/juguetes');
              }
            }
          });
      },
      error:(err:any) => {
          this.toastService.managementToast('postFeedback', false, 'Usuario o contraseña: ');
          timer(3000).subscribe({
            next:(value:number) => {
              if (value == 0) {
                  let toastMsg = <HTMLSpanElement>document.getElementById('postFeedback');
                  toastMsg.style.display = 'none';            
              }
            }
          })
      }
    });

    */
  }

}
