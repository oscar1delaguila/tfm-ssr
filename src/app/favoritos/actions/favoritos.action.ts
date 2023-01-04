


import { HttpErrorResponse } from '@angular/common/http';
import  { createAction, props } from '@ngrx/store';
import { Favorito } from '../../shared/models/favorito.interface';


export const getAllFavoritosByUser = createAction(
    '[GET ALL favoritos by user] getAllFavoritosByUser',
    props<{ idUser:string }>()
);

export const getAllFavoritosByUserSuccess = createAction(
    '[GET ALL favoritos by user success] getAllFavoritosByUserSuccess',
    props<{ favoritos:Favorito[] }>()
);

export const getAllFavoritosByUserFailure = createAction(
    '[GET ALL favoritos by user failure] getAllFavoritosByUserFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const deleteFavorito = createAction(
    '[DELETE favorito ] deleteFavorito',
    props<{ idFavorito:string }>()
);

export const deleteFavoritoSuccess = createAction(
    '[DELETE favorito success] deleteFavoritoSuccess',
    props<{ idFavorito:string }>()
);

export const deleteFavoritoFailure = createAction(
    '[DELETE favorito failure] deleteFavoritoFailure',
    props<{ payload:HttpErrorResponse }>()
);







