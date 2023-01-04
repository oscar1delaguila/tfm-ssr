


import { HttpErrorResponse } from '@angular/common/http';
import  { createAction, props } from '@ngrx/store';
import { JugueteTituloId } from 'src/app/shared/models/juguete-titulo-id.interface';
import { Experiencia } from '../../shared/models/experiencia.interface';





export const getExperiencias = createAction(
    '[blog experiencias Page] Get experiencias',
    props<{ numeroPagina:number  }>()
);

export const getExperienciasSuccess = createAction(
    '[Blog experiencias Page] Get experiencias Success',
    props<{ experiencias: Experiencia[] }>()
);

export const getExperienciasFailure = createAction(
    '[Blog experiencias Page] Get experiencias Failure',
    props<{ payload: HttpErrorResponse }>()
);

export const getExperienciaById = createAction(
    '[GET page detalle experiencia] getExperienciaById',
    props<{ idExperiencia:string }>()
);

export const getExperienciaByIdSuccess = createAction(
    '[GET page detalle experiencia success] getJugueteByIdSuccess',
    props<{ experiencia:Experiencia }>()
);

export const getExperienciaByIdFailure = createAction(
    '[GET page detalle experiencia failure] getExperienciaByIdFailure',
    props<{ payload:HttpErrorResponse }>()
);


export const setIdExperienciaDetalle = createAction(
    '[SET id exp detalle]',
    props<{ idExperienciaDetalle:string }>()
);



export const resetExperiencia = createAction (
    '[Experiencia] ResetExperiencia'
);
