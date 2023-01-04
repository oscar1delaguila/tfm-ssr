import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Usuario } from "../../shared/models/usuario.interface";




export const register = createAction(
    '[Register page] register new user',
    props<{ user:Usuario }>()
);

export const registerSuccess = createAction(
    '[Register page] Register new user Success',
    props<{ user:Usuario }>()
);
  
export const registerFailure = createAction(
    '[Register Page] Register new user Failure',
    props<{ payload: HttpErrorResponse }>()
);
  

export const updateUser = createAction(
    '[Profile Page] Update User',
    props<{ userId: string; user: Usuario }>()
);

export const updateUserSuccess = createAction(
    '[Profile Page] Update User Success',
    props<{ userId: string; user: Usuario }>()
);
  
export const updateUserFailure = createAction(
    '[Profile Page] Update User Failure',
    props<{ payload: HttpErrorResponse }>()
);

  
export const getUserById = createAction(
    '[Profile Page] Get user by ID',
    props<{ userId: string }>()
);

export const getUserByIdSuccess = createAction(
    '[Profile Page] Get user by ID Success',
    props<{ userId: string; user: Usuario }>()
);
  
export const getUserByIdFailure = createAction(
    '[Profile Page] Get user by ID Failure',
    props<{ payload: HttpErrorResponse }>()
);
  