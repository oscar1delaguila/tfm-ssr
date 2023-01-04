

import { HttpErrorResponse } from '@angular/common/http';
import  { createAction, props } from '@ngrx/store';
import { Auth } from '../models/auth.interface';


export const login = createAction(
    '[Login page] login',
    props<{ credentials:Auth }>()
);

export const loginSuccess = createAction(
    '[Login Page] Login Success',
    props<{ credentials: Auth }>()
);

export const loginFailure = createAction(
    '[Login Page] Login Failure',
    props<{ payload: HttpErrorResponse }>()
  );


export const isTheAdmin = createAction(
    '[AUTH] isTheAdmin',
    props<{ isAdmin:boolean }>()
);

export const logout = createAction (
    '[AUTH] Logout'
);


