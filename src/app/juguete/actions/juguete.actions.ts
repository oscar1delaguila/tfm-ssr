


import { HttpErrorResponse } from '@angular/common/http';
import  { createAction, props } from '@ngrx/store';
import { Categoria } from 'src/app/shared/models/categoria.interface';
import { Favorito } from 'src/app/shared/models/favorito.interface';
import { Juguete } from 'src/app/shared/models/juguete.interface';




export const createFavorito = createAction(
    '[CREATE favorito ] createFavorito',
    props<{ favorito:Favorito }>()
);

export const createFavoritoSuccess = createAction(
    '[CREATE favorito success] createFavoritoSuccess',
    props<{ idFavorito:string }>()
);

export const createFavoritoFailure = createAction(
    '[CREATE favorito failure] createFavoritoFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const getFavoritoByUserAndIdJuguete = createAction(
    '[GET favorito by user and id juguete] getFavoritoByUserAndIdJuguete',
    props<{ idJuguete:string, idUser:string }>()
);

export const getFavoritoByUserAndIdJugueteSuccess = createAction(
    '[GET favorito by user and id juguete success] getFavoritoByUserAndIdJugueteSuccess',
    props<{ idFavorito:string }>()
);

export const getFavoritoByUserAndIdJugueteFailure = createAction(
    '[GET favorito by user and id juguete failure] getFavoritoByUserAndIdJugueteFailure',
    props<{ payload:HttpErrorResponse }>()
);

export const deleteFavoritoFromDetalleJuguete = createAction(
    '[DELETE favorito ] deleteFavorito',
    props<{ idFavorito:string }>()
);

export const deleteFavoritoFromDetalleJugueteSuccess = createAction(
    '[DELETE favorito success] deleteFavoritoSuccess',
    props<{ idFavorito:string }>()
);

export const deleteFavoritoFromDetalleJugueteFailure = createAction(
    '[DELETE favorito failure] deleteFavoritoFailure',
    props<{ payload:HttpErrorResponse }>()
);


export const setTipoConsultaCatalogo = createAction(
    '[Catalogo Page] set tipo consulta catalogo',
    props<{ literalABuscar: string, isBusquedaCategoria:boolean, isBusquedaBuscador:boolean, numeroPagina:number }>()
);

export const getJuguetes = createAction(
    '[Catalogo Page] Get juguetes',
    props<{ literalABuscar: string, isBusquedaCategoria:boolean, isBusquedaBuscador:boolean, numeroPagina:number  }>()
);

export const getJuguetesSuccess = createAction(
    '[Catalogo Page] Get juguetes Success',
    props<{ juguetes: Juguete[] }>()
);

export const getJuguetesFailure = createAction(
    '[Catalogo Page] Get juguetes Failure',
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

export const addCategoriaToBreadCrumbs = createAction(
    'ADD categoria to breadcrumbs',
    props<{categoria:string}>()
);

export const deleteCategoriaToBreadCrumbs = createAction(
    'DELETE categoria to breadcrumbs',
    props<{indexCategoriaEnBreadCrumb:number}>()
);

export const setCategoriaSeleccionada = createAction(
    'SET categoria seleccionada',
    props<{categoriaSeleccionada:string}>()
);

export const resetJuguete = createAction (
    '[Juguete] Resetjuguete'
);


