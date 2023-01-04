
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { CategoriasService } from 'src/app/shared/services/categorias.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FavoritosService } from '../../shared/services/favoritos.service';

import * as jugueteActions  from '../actions/juguete.actions' ;

import { JuguetesService } from '../services/juguetes.service';



@Injectable()
export class JuguetesEffects {

  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private favoritosService: FavoritosService,
    private juguetesService: JuguetesService,
    private categoriasService: CategoriasService,
    private router: Router,
    private toastService: ToastService

  ) {
    this.responseOK = false;
  }


  getFavoritoByUserAndIdJuguete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.getFavoritoByUserAndIdJuguete),
      exhaustMap(({ idJuguete, idUser }) =>
        this.favoritosService.getFavoritoByUserAndIdJuguete(idJuguete, idUser).pipe(
          map((idFavoritoResponse) => {
            return jugueteActions.getFavoritoByUserAndIdJugueteSuccess({
              idFavorito:idFavoritoResponse,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.getFavoritoByUserAndIdJugueteFailure({ payload: error }));
          })
        )
      )
    )
  );

  getFavoritoByUserAndIdJugueteFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.getFavoritoByUserAndIdJugueteFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  createFavorito$ = createEffect(() =>
    this.actions$.pipe(
        ofType(jugueteActions.createFavorito),
        exhaustMap(({ favorito }) =>
        this.favoritosService.createFavorito(favorito).pipe(
            map((idFavorito) => {
              return jugueteActions.createFavoritoSuccess({ idFavorito: idFavorito});
            }),
            catchError((error) => {
              return of(jugueteActions.createFavoritoFailure({ payload: error }));
            }),
            finalize(() => {
              this.toastService.managementToast( this.responseOK, 'Create favorito ' ,this.errorResponse );
            })
        )
        )
    )
  );

  createFavoritoSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.createFavoritoSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );


  createFavoritoFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.createFavoritoFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  deleteFavoritoFromDetalleJuguete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.deleteFavoritoFromDetalleJuguete),
      exhaustMap(({ idFavorito }) =>
        this.favoritosService.deleteFavorito(idFavorito).pipe(
          map((idFavorito) => {
            return jugueteActions.deleteFavoritoFromDetalleJugueteSuccess({
              idFavorito: idFavorito,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.deleteFavoritoFromDetalleJugueteFailure({ payload: error }));
          })
        )
      )
    )
  );

  deleteFavoritoFromDetalleJugueteFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.deleteFavoritoFromDetalleJugueteFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );



  getJuguetes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.getJuguetes),
      exhaustMap(({ literalABuscar, isBusquedaBuscador, isBusquedaCategoria, numeroPagina }) =>
        this.juguetesService.getJuguetes(literalABuscar, isBusquedaCategoria, isBusquedaBuscador, numeroPagina).pipe(
          map((juguetesResponse) => {
            return jugueteActions.getJuguetesSuccess({
              juguetes: juguetesResponse,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.getJuguetesFailure({ payload: error }));
          })
        )
      )
    )
  );


  getJuguetesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.getJuguetesFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  getJugueteById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.getJugueteById),
      exhaustMap(({ idJuguete }) =>
        this.juguetesService.getJugueteById(idJuguete).pipe(
          map((jugueteResponse) => {
            return jugueteActions.getJugueteByIdSuccess({
              juguete: jugueteResponse,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.getJugueteByIdFailure({ payload: error }));
          })
        )
      )
    )
  );

  getJugueteByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.getJugueteByIdFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  getAllCategorias$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.getAllCategorias),
      exhaustMap(({}) =>
        this.categoriasService.getAllCategorias().pipe(
          map((categoriasResponse) => {
            return jugueteActions.getAllCategoriasSuccess({
              categorias: categoriasResponse,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.getAllCategoriasFailure({ payload: error }));
          })
        )
      )
    )
  );


  getAllCategoriasFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.getAllCategoriasFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  getAllCategoriaByJugueteId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.getAllCategoriasByJugueteId),
      exhaustMap(({idJuguete}) =>
        this.categoriasService.getAllCategoriasByJugueteId(idJuguete).pipe(
          map((categoriaResponse) => {
            return jugueteActions.getAllCategoriasByJugueteIdSuccess({
              categoria: categoriaResponse,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.getAllCategoriasByJugueteIdFailure({ payload: error }));
          })
        )
      )
    )
  );


  getAllCategoriaByJugueteIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.getAllCategoriasByJugueteIdFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

}

