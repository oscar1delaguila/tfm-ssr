import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';
import * as AuthActions from '../actions';
import { Auth } from '../models/auth.interface';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects {

  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService

  ) {
    this.responseOK = false;
  }


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map((userToken) => {
            const credentialsTemp: Auth = {
              email: credentials.email,
              password: credentials.password,
              user_id: userToken.user_id,
              access_token: userToken.access_token,
              isAdmin: ((userToken.email == 'gegantoys@gegantoys.com') ? true : false)
            };

            return AuthActions.loginSuccess({ credentials: credentialsTemp });
          }),
          catchError((error) => {
            return of(AuthActions.loginFailure({ payload: error }));
          }),
          finalize(() => {
            this.toastService.managementToast( this.responseOK, 'Login' ,this.errorResponse );
            if (this.responseOK) {
              this.router.navigateByUrl('juguetes');
            }
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
}
