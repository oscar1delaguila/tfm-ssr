

import { Action, createReducer, on} from '@ngrx/store';
import * as experienciaActions from '../actions/experiencias.actions';
import { Experiencia } from '../../shared/models/experiencia.interface';
import { Actions } from '@ngrx/effects';


export interface ExperienciaState {


    numeroPagina:number,
    idExperienciaDetalle:string,
    experiencias: Experiencia [],
    experiencia: Experiencia,
    loading:boolean,
    loaded:boolean,
    error:any;
}

export const initialState: ExperienciaState = {

    numeroPagina: 1,
    idExperienciaDetalle:'',
    experiencias: [],
    experiencia: { 
                   id:'', titulo:'', descripcion:'', fecha_publicacion: new Date(), imagen_experiencia:'', valoracion: 0, 
                   juguete_id:'', publicado:false, user_id:''
                 },
    loading: false,
    loaded:false,
    error:null
}


const _experienciaReducer = createReducer(

        
    initialState,

    on(experienciaActions.getExperiencias, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on(experienciaActions.getExperienciasSuccess, (state, action) => ({
        ...state,
        numeroPagina: (action.experiencias.length > 0) ? state.numeroPagina + 1 : state.numeroPagina, 
        experiencias:  state.experiencias.concat(action.experiencias.filter((item:Experiencia) => item.publicado == true )),
        loading: false,
        loaded: true,
        error: null,
      })),

    on(experienciaActions.getExperienciasFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on( experienciaActions.getExperienciaById , (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( experienciaActions.getExperienciaByIdSuccess, (state, action) => ({
        ...state,
        experiencia: action.experiencia,
        idExperienciaDetalle: action.experiencia.id,
        loading: false,
        loaded: true,
        error: null,
    })),

    on( experienciaActions.getExperienciaByIdFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),


    on( experienciaActions.setIdExperienciaDetalle, (state, { idExperienciaDetalle }) => ({
        ...state,
        idExperienciaDetalle:idExperienciaDetalle,
    })),


    on(experienciaActions.resetExperiencia, () => initialState ),



);


export function experienciaReducer(state: ExperienciaState | undefined, action: Action) {
          return  _experienciaReducer(state, action);
}
      
      
      