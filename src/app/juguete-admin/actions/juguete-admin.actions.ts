


import { HttpErrorResponse } from '@angular/common/http';
import  { createAction, props } from '@ngrx/store';
import { Categoria } from '../../shared/models/categoria.interface';
import { Juguete } from '../../shared/models/juguete.interface';





export const getAllJuguetes = createAction(
    '[Listado juguetes admin Page] Get All juguetes',
    props<{ numeroPagina:number  }>()
);

export const getAllJuguetesSuccess = createAction(
    '[Listado juguetes admin Page] Get All juguetes Success',
    props<{ juguetes: Juguete[] }>()
);

export const getAllJuguetesFailure = createAction(
    '[Catalogo Page] Get All juguetes  Failure',
    props<{ payload: HttpErrorResponse }>()
);

export const getJugueteById = createAction(
    '[GET page detalle juguete] getJugueteById',
    props<{ idJuguete:string }>()
);

export const getJugueteByIdSuccess = createAction(
    '[GET page detalle juguete success] getJugueteByIdSuccess',
    props<{ juguete:Juguete }>()
);

export const getJugueteByIdFailure = createAction(
    '[GET page detall juguete failure] getJugueteByIdFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const createJuguete = createAction(
    '[CREATE juguete ] createJuguete',
    props<{ juguete:FormData }>()
);

export const createJugueteSuccess = createAction(
    '[CREATE juguete success] createJugueteSuccess',
    props<{ juguete:Juguete }>()
);

export const createJugueteFailure = createAction(
    '[CREATE juguete failure] createJugueteFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const updateJuguete = createAction(
    '[UPDATE juguete ] updateJuguete',
    props<{ juguete:FormData }>()
);

export const updateJugueteSuccess = createAction(
    '[UPDATE juguete success] updateJugueteSuccess',
    props<{ idJuguete:number }>()
);

export const updateJugueteFailure = createAction(
    '[UPDATE juguete failure] updateJugueteFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const deleteJuguete = createAction(
    '[DELETE juguete ] deleteJuguete',
    props<{ idJuguete:string }>()
);

export const deleteJugueteSuccess = createAction(
    '[DELETE juguete success] deleteJugueteSuccess',
    props<{ idJuguete:string }>()
);

export const deleteJugueteFailure = createAction(
    '[DELETE juguete failure] deleteJugueteFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const getAllCategorias = createAction(
    '[GET All categorias] Get All juguetes',
);

export const getAllCategoriasSuccess = createAction(
    '[Get all categorias] Get All Categorias Success',
    props<{ categorias: Categoria[] }>()
);

export const getAllCategoriasFailure = createAction(
    '[Get all categorias] Get All Categorias Failure',
    props<{ payload: HttpErrorResponse }>()
);

export const getAllCategoriasByJugueteId = createAction(
    '[GET All categorias] Get All juguetes',
    props<{ idJuguete: string }>()
);

export const getAllCategoriasByJugueteIdSuccess = createAction(
    '[Get all categorias] Get All Categorias Success',
    props<{ categoria: Categoria }>()
);

export const getAllCategoriasByJugueteIdFailure = createAction(
    '[Get all categorias] Get All Categorias Failure',
    props<{ payload: HttpErrorResponse }>()
);

export const publicarJuguete = createAction(
    '[PUT publicarJuguete ] publicarJuguete',
    props<{ idJuguete:string, valorCheckbox:boolean }>()
);

export const publicarJugueteSuccess = createAction(
    '[PUT publicarJugueteSuccess ] publicarJuguete success',
    props<{idJuguete:number, publicado:boolean }>()
);

export const publicarJugueteFailure = createAction(
    '[PUT publicarJugueteFailure ] publicarJuguete failure',
    props<{ payload:HttpErrorResponse }>()
);

export const resetJugueteAdmin = createAction (
    '[Juguete] ResetjugueteAdmin'
);


