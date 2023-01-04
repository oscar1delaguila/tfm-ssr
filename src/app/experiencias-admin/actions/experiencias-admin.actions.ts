


import { HttpErrorResponse } from '@angular/common/http';
import  { createAction, props } from '@ngrx/store';
import { Experiencia } from 'src/app/shared/models/experiencia.interface';
import { JugueteTituloId } from 'src/app/shared/models/juguete-titulo-id.interface';




export const getAllExperienciasByUsuario = createAction(
    '[GET experiencia by user ] getAllExperienciasByUsuario',
    props<{ idUser:string, numeroPagina:number }>()
);

export const getAllExperienciasByUsuarioSuccess = createAction(
    '[GET experiencia by user success] getAllExperienciasByUsuarioSuccess',
    props<{ experiencias:Experiencia[] }>()
);

export const getAllExperienciasByUsuarioFailure = createAction(
    '[GET experiencia by user failure] getAllExperienciasByUsuarioFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const getAllExperiencias = createAction(
    '[Admin experiencias Page] Get All experiencias',
    props<{ numeroPagina:number  }>()
);

export const getAllExperienciasSuccess = createAction(
    '[Admin experiencias Page] Get All experiencias Success',
    props<{ experiencias: Experiencia[] }>()
);

export const getAllExperienciasFailure = createAction(
    '[Admin experiencias Page] Get All experiencias Failure',
    props<{ payload: HttpErrorResponse }>()
);

export const getExperienciaByIdAdmin = createAction(
    '[GET page detalle experiencia] getExperienciaById',
    props<{ idExperiencia:string }>()
);

export const getExperienciaByIdAdminSuccess = createAction(
    '[GET page detalle experiencia success] getJugueteByIdSuccess',
    props<{ experiencia:Experiencia }>()
);

export const getExperienciaByIdAdminFailure = createAction(
    '[GET page detalle experiencia failure] getExperienciaByIdFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const createExperiencia = createAction(
    '[CREATE experiencia ] createExperiencia',
    props<{ experiencia:FormData }>()
);

export const createExperienciaSuccess = createAction(
    '[CREATE experiencia success ] createExperiencia success',
    props<{ experiencia:Experiencia }>()
);

export const createExperienciaFailure = createAction(
    '[CREATE experiencia failure ] createExperiencia failure',
    props<{ payload:HttpErrorResponse }>()
);

export const updateExperiencia = createAction(
    '[UPDATE experiencia ] updateExperiencia',
    props<{ experiencia:FormData }>()
);

export const updateExperienciaSuccess = createAction(
    '[UPDATE experiencia success ] updateExperiencia success',
    props<{ experiencia:Experiencia }>()
);

export const updateExperienciaFailure = createAction(
    '[UPDATE experiencia failure ] updateExperiencia failure',
    props<{ payload:HttpErrorResponse }>()
);

export const deleteExperiencia = createAction(
    '[DELETE experiencia ] deleteExperiencia',
    props<{ idExperiencia:string }>()
);

export const deleteExperienciaSuccess = createAction(
    '[DELETE experiencia success] deleteExperienciaSuccess',
    props<{ idExperiencia:string }>()
);

export const deleteExperienciaFailure = createAction(
    '[DELETE experiencia failure] deleteExperienciaFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const getAllTitulosJuguetes = createAction(
    '[GET All titulos juguetes page form experiencia] getAllTitulosJuguetes',
);

export const getAllTitulosJuguetesSuccess = createAction(
    '[GET All titulos juguetes page form experiencia success] getAllTitulosJuguetesSuccess',
    props<{ titulosJuguetes:JugueteTituloId[] }>()
);

export const getAllTitulosJuguetesFailure = createAction(
    '[GET All titulos juguetes page form experiencia failure] getAllTitulosJuguetesFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const resetExperiencia = createAction (
    '[Experiencia] ResetExperiencia'
);

export const publicarExperiencia = createAction(
    '[PUT publicarExperiencia ] publicarExperiencia',
    props<{ idExperiencia:string, valorCheckbox:boolean }>()
);

export const publicarExperienciaSuccess = createAction(
    '[PUT publicarExperienciaSuccess ] publicarExperiencia success',
    props<{idExperiencia:number, publicado:boolean }>()
);

export const publicarExperienciaFailure = createAction(
    '[PUT publicarExperienciaFailure ] publicarJuguete failure',
    props<{ payload:HttpErrorResponse }>()
);

