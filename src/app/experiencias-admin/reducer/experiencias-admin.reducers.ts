

import { Actions } from '@ngrx/effects';
import { Action, createReducer, on} from '@ngrx/store';
import * as experienciaActions from '../actions/experiencias-admin.actions';
import { itemsPorPagina } from '../../globals';
import { JugueteTituloId } from 'src/app/shared/models/juguete-titulo-id.interface';
import { Experiencia } from 'src/app/shared/models/experiencia.interface';


export interface ExperienciaAdminState {

    titulosAllJuguetes: JugueteTituloId[],
    numeroPagina:number,
    idExperiencia:string,
    experiencias: Experiencia [],
    experiencia: Experiencia,
    loading:boolean,
    loaded:boolean,
    error:any;
}

export const initialState: ExperienciaAdminState = {

    titulosAllJuguetes: [],
    numeroPagina: 1,
    idExperiencia:'',
    experiencias: [],
    experiencia: { 
                   id:'', titulo:'', descripcion:'', fecha_publicacion: new Date(), imagen_experiencia:'', valoracion: 0, 
                   juguete_id:'', publicado:false, user_id:''
                 },
    loading: false,
    loaded:false,
    error:null
}


const _experienciaAdminReducer = createReducer(

        
    initialState,


    on( experienciaActions.getAllExperienciasByUsuario , (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( experienciaActions.getAllExperienciasByUsuarioSuccess, (state, action) => ({
        ...state,
        numeroPagina: (action.experiencias.length > 0) ? state.numeroPagina + 1 : state.numeroPagina, 
        experiencias: state.experiencias.concat(action.experiencias),
        loading: false,
        loaded: true,
        error: null,
    })),

    on( experienciaActions.getAllExperienciasByUsuarioFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on(experienciaActions.getAllExperiencias, (state) => ({
        ...state,
        experiencia:initialState.experiencia,
        loading: true,
        loaded: false,
        error: null,
      })),

    on(experienciaActions.getAllExperienciasSuccess, (state, action) => ({
        ...state,
        numeroPagina: (action.experiencias.length > 0) ? state.numeroPagina + 1 : state.numeroPagina, 
        experiencias: state.experiencias.concat(action.experiencias),
        loading: false,
        loaded: true,
        error: null,
      })),

    on(experienciaActions.getAllExperienciasFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),


    on( experienciaActions.getExperienciaByIdAdmin , (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( experienciaActions.getExperienciaByIdAdminSuccess, (state, action) => ({
        ...state,
        experiencia: action.experiencia,
        loading: false,
        loaded: true,
        error: null,
    })),

    on( experienciaActions.getExperienciaByIdAdminFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on( experienciaActions.createExperiencia, ( state ) => ({
        ...state, 
        loading: true,
        loaded: false,
        error: null,
    })),

    on( experienciaActions.createExperienciaSuccess, (state, action ) => ({
        ...state,
        experiencia:action.experiencia,
        numeroPagina: Math.ceil(state.experiencias.length + 1 / itemsPorPagina) + 1,
        experiencias:state.experiencias.concat(action.experiencia),
        loading: false,
        loaded: true,
        error: null,
      })),
    
    on( experienciaActions.createExperienciaFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),


    on( experienciaActions.updateExperiencia, ( state ) => ({
        ...state, 
        experiencia:state.experiencia,
        loading: true,
        loaded: false,
        error: null,
    })),

    on( experienciaActions.updateExperienciaSuccess, (state, action ) => ({

        ...state,
        idExperiencia:action.experiencia.id,
        experiencia:initialState.experiencia,
        /*
        experiencias: state.experiencias.map(( item:Experiencia ) => { 

          if ( item.id === action.experiencia.id) {
             return {
                  ...item, 
                  titulo: action.experiencia.titulo,
                  descripcion: action.experiencia.descripcion,
                  imagen_experiencia:action.experiencia.imagen_experiencia,
                  valoracion: action.experiencia.valoracion, 
                  publicado: action.experiencia.publicado,
                  fecha_publicacion: action.experiencia.fecha_publicacion,
             }
          } else { 
              return item;
          }
      
        }) ,*/

        loading: false,
        loaded: true,
        error: null,
      })),
    
    on( experienciaActions.updateExperienciaFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),



    on(experienciaActions.deleteExperiencia, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
    })),

    on(experienciaActions.deleteExperienciaSuccess, (state, action) => ({
        ...state,
        numeroPagina: Math.ceil(state.experiencias.length - 1 / itemsPorPagina) + 1,
        experiencias: [...state.experiencias.filter((experiencia) => experiencia.id !== action.idExperiencia )],
        loading: false,
        loaded: true,
        error: null,
    })),

    on(experienciaActions.deleteExperienciaFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on( experienciaActions.getAllTitulosJuguetes , (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( experienciaActions.getAllTitulosJuguetesSuccess, (state, action) => ({
        ...state,
        titulosAllJuguetes: action.titulosJuguetes,
        loading: false,
        loaded: true,
        error: null,
    })),

    on( experienciaActions.getAllTitulosJuguetesFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),


    on(experienciaActions.publicarExperiencia, (state) => ({
      ...state,
      loading: true,
      loaded: false,
      error: null,
    })),

    on(experienciaActions.publicarExperienciaSuccess, (state, action) => ({
        ...state,
        experiencias: state.experiencias.map(( item:Experiencia ) => { 

          if ( item.id === action.idExperiencia.toString() ) {
             return {
                  ...item, 
                  publicado: action.publicado,
             }
          } else { 
              return item;
          }
        }),  
        loading: false,
        loaded: true,
        error: null,
    })),

    on(experienciaActions.publicarExperienciaFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
    })),


    on(experienciaActions.resetExperiencia, () =>  initialState ),



);


export function experienciaAdminReducer(state: ExperienciaAdminState | undefined, action: Action) {
          return  _experienciaAdminReducer(state, action);
}
      
      
      