
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { CategoriasService } from 'src/app/shared/services/categorias.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import * as jugueteActions  from '../actions/juguete-admin.actions' ;
import { JuguetesAdminService } from '../services/juguetes-admin.service';


@Injectable()
export class JuguetesAdminEffects {

  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private juguetesAdminService: JuguetesAdminService,
    private categoriasService: CategoriasService,
    private router: Router,
    private toastService: ToastService

  ) {
    this.responseOK = false;
  }




  getAllJuguetes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.getAllJuguetes),
      exhaustMap(({ numeroPagina }) =>
        this.juguetesAdminService.getAllJuguetes(numeroPagina).pipe(
          map((juguetesResponse) => {
            return jugueteActions.getAllJuguetesSuccess({
              juguetes: juguetesResponse,
            });
          }),
          catchError((error) => {
            return of(jugueteActions.getAllJuguetesFailure({ payload: error }));
          })
        )
      )
    )
  );


  getAllJuguetesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.getAllJuguetesFailure),
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
        this.juguetesAdminService.getJugueteById(idJuguete).pipe(
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


  createJuguete$ = createEffect(() =>
    this.actions$.pipe(
        ofType(jugueteActions.createJuguete),
        exhaustMap(({ juguete }) =>
        this.juguetesAdminService.add(juguete).pipe(
            map((jugueteCreated) => {
              return jugueteActions.createJugueteSuccess({ juguete: jugueteCreated});
            }),
            catchError((error) => {
              return of(jugueteActions.createJugueteFailure({ payload: error }));
            }),
            finalize(() => {
              this.toastService.managementToast( this.responseOK, 'Create Juguete ' ,this.errorResponse );
              if (this.responseOK) {
                  this.router.navigateByUrl('juguetes-listado');
              }
            })
        )
        )
    )
  );

  createJugueteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.createJugueteSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );


  createJugueteFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.createJugueteFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updateJuguete$ = createEffect(() =>
    this.actions$.pipe(
        ofType(jugueteActions.updateJuguete),
        exhaustMap(({ juguete }) =>
        this.juguetesAdminService.update(juguete).pipe(
            map((idJuguete) => {
              return jugueteActions.updateJugueteSuccess({ idJuguete: idJuguete});
            }),
            catchError((error) => {
              return of(jugueteActions.updateJugueteFailure({ payload: error }));
            }),
            finalize(() => {
              this.toastService.managementToast( this.responseOK, ' Update Juguete ' ,this.errorResponse );
              if (this.responseOK) {
                  this.router.navigateByUrl('juguetes-listado');
              }
            })
        )
        )
    )
  );

  udpateJugueteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.updateJugueteSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );


  updateJugueteFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.updateJugueteFailure),
        map((error) => {
          this.responseOK =false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  deleteJuguete$ = createEffect(() =>
  this.actions$.pipe(
    ofType(jugueteActions.deleteJuguete),
    exhaustMap(({ idJuguete }) =>
      this.juguetesAdminService.delete(idJuguete).pipe(
        map(() => {
          return jugueteActions.deleteJugueteSuccess({
            idJuguete: idJuguete,
          });
        }),
        catchError((error) => {
          return of(jugueteActions.deleteJugueteFailure({ payload: error }));
        })
      )
    )
  )
);

deleteJugueteFailure$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(jugueteActions.deleteJugueteFailure),
      map((error) => {
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



  publicarJuguete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jugueteActions.publicarJuguete),
      exhaustMap(({ idJuguete, valorCheckbox }) =>
        this.juguetesAdminService.publicarJuguete(idJuguete,valorCheckbox).pipe(
          map(({id, publicado}) => {
            return jugueteActions.publicarJugueteSuccess({
              idJuguete:id,
              publicado:publicado
            });
          }),
          catchError((error) => {
            return of(jugueteActions.publicarJugueteFailure({ payload: error }));
          })
        )
      )
    )
  );

  publicarJugueteFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(jugueteActions.publicarJugueteFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );



}

