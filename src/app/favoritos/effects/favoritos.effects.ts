import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FavoritosService } from '../../shared/services/favoritos.service';
import * as favoritosActions  from '../actions/favoritos.action' ;


@Injectable()
export class FavoritosEffects {

  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private favoritosService: FavoritosService,
    private router: Router,
    private toastService: ToastService

  ) {
    this.responseOK = false;
  }





  getAllFavoritosByUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(favoritosActions.getAllFavoritosByUser),
      exhaustMap(({ idUser }) =>
        this.favoritosService.getAllFavoritosByUser(idUser).pipe(
          map((favoritosResponse) => {
            return favoritosActions.getAllFavoritosByUserSuccess({
              favoritos: favoritosResponse,
            });
          }),
          catchError((error) => {
            return of(favoritosActions.getAllFavoritosByUserFailure({ payload: error }));
          })
        )
      )
    )
  );


  getAllFavoritosByUserFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(favoritosActions.getAllFavoritosByUserFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  deleteFavorito$ = createEffect(() =>
    this.actions$.pipe(
      ofType(favoritosActions.deleteFavorito),
      exhaustMap(({ idFavorito }) =>
        this.favoritosService.deleteFavorito(idFavorito).pipe(
          map(() => {
            return favoritosActions.deleteFavoritoSuccess({
              idFavorito: idFavorito,
            });
          }),
          catchError((error) => {
            return of(favoritosActions.deleteFavoritoFailure({ payload: error }));
          })
        )
      )
    )
  );

  deleteFavoritoFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(favoritosActions.deleteFavoritoFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );



}
