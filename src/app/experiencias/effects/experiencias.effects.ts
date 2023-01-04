
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';

import * as experienciasActions  from '../actions/experiencias.actions' ;
import { ExperienciaService } from '../services/experiencia.service';


@Injectable()
export class ExperienciasEffects {

  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private experienciaService: ExperienciaService,
    private router: Router,
    private toastService: ToastService

  ) {

  }



  getExperienciaById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.getExperienciaById),
      exhaustMap(({ idExperiencia }) =>
        this.experienciaService.getExperienciaById(idExperiencia).pipe(
          map((experienciaResponse) => {
            return experienciasActions.getExperienciaByIdSuccess({
              experiencia:experienciaResponse,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.getExperienciaByIdFailure({ payload: error }));
          })
        )
      )
    )
  );

  getExperienciaByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.getExperienciaByIdFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );



  getExperiencias$ = createEffect(() =>
    this.actions$.pipe(
      ofType(experienciasActions.getExperiencias),
      exhaustMap(({ numeroPagina }) =>
        this.experienciaService.getAllExperiencias(numeroPagina).pipe(
          map((experienciasResponse) => {
            return experienciasActions.getExperienciasSuccess({
              experiencias: experienciasResponse,
            });
          }),
          catchError((error) => {
            return of(experienciasActions.getExperienciasFailure({ payload: error }));
          })
        )
      )
    )
  );


  getExperienciasFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(experienciasActions.getExperienciasFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.toastService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );




}

