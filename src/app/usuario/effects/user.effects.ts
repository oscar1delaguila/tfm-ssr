


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';
import * as UserActions from '../actions';
import { UsuarioService } from '../services/usuario.service';

@Injectable()
export class UserEffects {
  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.responseOK = false;
  }

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.register),
      exhaustMap(({ user }) =>
        this.usuarioService.register(user).pipe(
          map((userTemp) => {
            return UserActions.registerSuccess({ user: userTemp });
          }),
          catchError((error) => {
            return of(UserActions.registerFailure({ payload: error }));
          }),
          finalize(() => {
            this.toastService.managementToast( this.responseOK,'Register' ,this.errorResponse );

            if (this.responseOK) {
              this.router.navigateByUrl('juguetes');
            }
          })
        )
      )
    )
  );

  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.registerSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  registerFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.registerFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      exhaustMap(({ userId, user }) =>
        this.usuarioService.updateUser(userId, user).pipe(
          map((user) => {
            return UserActions.updateUserSuccess({
              userId: userId,
              user: user,
            });
          }),
          catchError((error) => {
            return of(UserActions.updateUserFailure({ payload: error }));
          }),
          finalize(() => {
             this.toastService.managementToast( this.responseOK, 'Perfil', this.errorResponse );
          })
        )
      )
    )
  );

  updateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  updateUserFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserById),
      exhaustMap(({ userId }) =>
        this.usuarioService.getUserById(userId).pipe(
          map((user) => {
            return UserActions.getUserByIdSuccess({
              userId: userId,
              user: user,
            });
          }),
          catchError((error) => {
            return of(UserActions.getUserByIdFailure({ payload: error }));
          })
        )
      )
    )
  );


  getUserByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.getUserByIdFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
}
