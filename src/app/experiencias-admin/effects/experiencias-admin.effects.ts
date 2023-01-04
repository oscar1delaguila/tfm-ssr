
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';

import * as experienciasActions  from '../actions/experiencias-admin.actions' ;
import { ExperienciaAdminService } from '../services/experiencia-admin.service';


@Injectable()
export class ExperienciasAdminEffects {

  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private experienciaAdminService: ExperienciaAdminService,
    private router: Router,
    private toastService: ToastService

  ) {
    this.responseOK = false;
  }


  getAllExperienciasByUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.getAllExperienciasByUsuario),
      exhaustMap(({ idUser, numeroPagina }) =>
        this.experienciaAdminService.getAllExperienciasByUsuario(idUser, numeroPagina).pipe(
          map((experienciasResponse) => {
            return experienciasActions.getAllExperienciasByUsuarioSuccess({
              experiencias:experienciasResponse,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.getAllExperienciasByUsuarioFailure({ payload: error }));
          })
        )
      )
    )
  );

  getAllExperienciasByUsuarioFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.getAllExperienciasByUsuarioFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getExperienciaByIdAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.getExperienciaByIdAdmin),
      exhaustMap(({ idExperiencia }) =>
        this.experienciaAdminService.getExperienciaById(idExperiencia).pipe(
          map((experienciaResponse) => {
            return experienciasActions.getExperienciaByIdAdminSuccess({
              experiencia:experienciaResponse,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.getExperienciaByIdAdminFailure({ payload: error }));
          })
        )
      )
    )
  );

  getExperienciaByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.getExperienciaByIdAdminFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );



  
  getAllExperiencias$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.getAllExperiencias),
      exhaustMap(({ numeroPagina }) =>
        this.experienciaAdminService.getAllExperiencias(numeroPagina).pipe(
          map((experienciasResponse) => {
            return experienciasActions.getAllExperienciasSuccess({
              experiencias: experienciasResponse,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.getAllExperienciasFailure({ payload: error }));
          })
        )
      )
    )
  );


  getAllExperienciasFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.getAllExperienciasFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  createExperiencia$ = createEffect(() =>
    this.actions$.pipe(
        ofType(experienciasActions.createExperiencia),
        exhaustMap(({ experiencia }) =>
        this.experienciaAdminService.add(experiencia).pipe(
            map((experienciaCreated) => {
              /*const experienciaTemp: Experiencia = {
                  
                  id: experienciaCreated.id,
                  juguete_id: experienciaCreated.juguete_id,
                  user_id: experienciaCreated.user_id,
                  fecha_publicacion: experienciaCreated.fecha_publicacion,
                  descripcion:experienciaCreated.descripcion,
                  imagen_experiencia:experienciaCreated.imagen_experiencia,
                  publicado: experienciaCreated.publicado,
                  titulo: experienciaCreated.titulo,
                  valoracion: experienciaCreated.valoracion
              };*/
              return experienciasActions.createExperienciaSuccess({ experiencia: experienciaCreated });
              }),
            catchError((error) => {
              return of(experienciasActions.createExperienciaFailure({ payload: error }));
            }),
            finalize(() => {
              this.toastService.managementToast( this.responseOK, 'Create Experiencia ' ,this.errorResponse );
              if (this.responseOK) {
                  this.router.navigateByUrl('experiencias-listado');
              }
            })
        )
        )
    )
  );

  createExperienciaSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.createExperienciaSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  createExperienciaFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.createExperienciaFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updateExperiencia$ = createEffect(() =>
    this.actions$.pipe(
        ofType(experienciasActions.updateExperiencia),
        exhaustMap(({ experiencia }) =>
        this.experienciaAdminService.update(experiencia).pipe(
            map((experienciaCreated) => {
              /*const experienciaTemp: Experiencia = {
                  id: experienciaCreated.id,
                  juguete_id: experienciaCreated.juguete_id,
                  user_id: experienciaCreated.user_id,
                  fecha_publicacion: experienciaCreated.fecha_publicacion      
              };*/
              return experienciasActions.updateExperienciaSuccess({ experiencia: experienciaCreated });
            }),
            catchError((error) => {
              return of(experienciasActions.updateExperienciaFailure({ payload: error }));
            }),
            finalize(() => {
              this.toastService.managementToast( this.responseOK, 'Update Experiencia ' ,this.errorResponse );
              if (this.responseOK) {
                  this.router.navigateByUrl('experiencias-listado');
              }
            })
        )
        )
    )
  );

  updateExperienciaSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.updateExperienciaSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );


  updateExperienciaFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.updateExperienciaFailure),
        map((error) => {
          this.responseOK =false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  deleteExperiencia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.deleteExperiencia),
      exhaustMap(({ idExperiencia }) =>
        this.experienciaAdminService.delete(idExperiencia).pipe(
          map(() => {
            return experienciasActions.deleteExperienciaSuccess({
              idExperiencia: idExperiencia,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.deleteExperienciaFailure({ payload: error }));
          })
        )
      )
    )
  );

  deleteExperienciaFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.deleteExperienciaFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );


  getAllTitulosJuguetes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.getAllTitulosJuguetes),
      exhaustMap(({ }) =>
        this.experienciaAdminService.getAllTitulosJuguetes().pipe(
          map((titulosJuguetesResponse) => {
            return experienciasActions.getAllTitulosJuguetesSuccess({
              titulosJuguetes: titulosJuguetesResponse,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.getAllTitulosJuguetesFailure({ payload: error }));
          })
        )
      )
    )
  );


  getAllTitulosJuguetesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.getAllTitulosJuguetesFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  publicarExperiencia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.publicarExperiencia),
      exhaustMap(({ idExperiencia, valorCheckbox }) =>
        this.experienciaAdminService.publicarExperiencia(idExperiencia,valorCheckbox).pipe(
          map(({id, publicado}) => {
            return experienciasActions.publicarExperienciaSuccess({
              idExperiencia:id,
              publicado:publicado
            });
          }),
          catchError((error) => {
            return of(experienciasActions.publicarExperienciaFailure({ payload: error }));
          })
        )
      )
    )
  );

  publicarExperienciaFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.publicarExperienciaFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );





}

