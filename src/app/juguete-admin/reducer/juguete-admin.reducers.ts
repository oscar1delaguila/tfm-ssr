

import { Action, createReducer, on} from '@ngrx/store';
import * as jugueteAdminActions from '../actions/juguete-admin.actions';
import { Categoria } from '../../shared/models/categoria.interface';
import { Juguete } from '../../shared/models/juguete.interface';
import { itemsPorPagina } from 'src/app/globals';


export interface JugueteAdminState {

    categorias:Categoria[],
    categoria:Categoria,
    numeroPagina:number,
    idJuguete:number,
    juguetes: Juguete [],
    juguete: Juguete,
    loading:boolean,
    loaded:boolean,
    error:any;
}

export const initialState: JugueteAdminState = {

    categorias:[],
    categoria: {
              id:'', imagen_categoria:'', imagen_subcat1:'', imagen_subcat2:'', nombre_categoria:'', subcategoria1:'',subcategoria2:''
            }, 
    numeroPagina: 1,
    idJuguete:0,
    juguetes: [],
    juguete: {
        id:'', alto:'',ancho:'',largo:'',contra1:'0', contra2:'0', contra3:'0', contra4:'0', contra5:'', contra6:'',
        pro1:'', pro2:'', pro3:'', pro4:'', pro5:'', pro6:'',descripcion:'', titulo:'', edad:0, fecha_publicacion: new Date(),
        marca:'',material:'',num_votaciones:0, publicado: false, precio:0, path_imagen:'', 
        categoria: {imagen_categoria:'', imagen_subcat1:'', imagen_subcat2:'', nombre_categoria:'', subcategoria1:'', subcategoria2:'', id:'' },
        puntuacion:0,imagen1:'', imagen2:'', imagen3:'', imagen4:'', imagen5:'', imagen6:'', imagen7:'', imagen8:''
    },
    loading: false,
    loaded:false,
    error:null
}


const _jugueteAdminReducer = createReducer(

        
    initialState,




    on(jugueteAdminActions.getAllJuguetes, (state) => ({
        ...state,
        juguete:initialState.juguete,
        loading: true,
        loaded: false,
        error: null,
      })),

    on(jugueteAdminActions.getAllJuguetesSuccess, (state, action) => ({
        ...state,
        numeroPagina: (action.juguetes.length > 0) ? state.numeroPagina + 1 : state.numeroPagina, 
        juguetes: state.juguetes.concat(action.juguetes),
        loading: false,
        loaded: true,
        error: null,
      })),

    on(jugueteAdminActions.getAllJuguetesFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on( jugueteAdminActions.getJugueteById , (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( jugueteAdminActions.getJugueteByIdSuccess, (state, action) => ({
        ...state,
        juguete: action.juguete,
        loading: false,
        loaded: true,
        error: null,
    })),

    on( jugueteAdminActions.getJugueteByIdFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on( jugueteAdminActions.createJuguete, ( state ) => ({
        ...state, 
        loading: true,
        loaded: false,
        error: null,
    })),

    on( jugueteAdminActions.createJugueteSuccess, (state, action ) => ({
        ...state,
        numeroPagina: Math.ceil(state.juguetes.length + 1 / itemsPorPagina) + 1,
        juguete: action.juguete,
        juguetes: state.juguetes.concat(action.juguete),
        loading: false,
        loaded: true,
        error: null,
      })),
    
    on( jugueteAdminActions.createJugueteFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),

      on( jugueteAdminActions.updateJuguete, ( state ) => ({
        ...state, 
        loading: true,
        loaded: false,
        error: null,
    })),

    on( jugueteAdminActions.updateJugueteSuccess, (state, action ) => ({
        ...state,
        idJuguete: action.idJuguete,
        loading: false,
        loaded: true,
        error: null,
      })),
    
    on( jugueteAdminActions.updateJugueteFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),

    
    on(jugueteAdminActions.deleteJuguete, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
    })),

    on(jugueteAdminActions.deleteJugueteSuccess, (state, action) => ({
        ...state,
        numeroPagina: Math.ceil(state.juguetes.length - 1 / itemsPorPagina) + 1,
        juguetes: [...state.juguetes.filter((juguete) => juguete.id !== action.idJuguete )],
        loading: false,
        loaded: true,
        error: null,
    })),
    
    on(jugueteAdminActions.deleteJugueteFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on(jugueteAdminActions.getAllCategorias, (state) => ({
      ...state,
      loading: true,
      loaded: false,
      error: null,
    })),

  on(jugueteAdminActions.getAllCategoriasSuccess, (state, action) => ({
      ...state,
      categorias: action.categorias,
      loading: false,
      loaded: true,
      error: null,
    })),

  on(jugueteAdminActions.getAllCategoriasFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
  })),

  on(jugueteAdminActions.getAllCategoriasByJugueteId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),

  on(jugueteAdminActions.getAllCategoriasByJugueteIdSuccess, (state, action) => ({
      ...state,
      categoria: action.categoria,
      loading: false,
      loaded: true,
      error: null,
    })),

  on(jugueteAdminActions.getAllCategoriasByJugueteIdFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
  })),


  on(jugueteAdminActions.publicarJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),

  on(jugueteAdminActions.publicarJugueteSuccess, (state, action) => ({
      ...state,
      juguetes: state.juguetes.map(( item:Juguete ) => { 

        if ( item.id === action.idJuguete.toString() ) {
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

  on(jugueteAdminActions.publicarJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),


  on(jugueteAdminActions.resetJugueteAdmin, () => initialState ),


);


export function jugueteAdminReducer(state: JugueteAdminState | undefined, action: Action) {
          return  _jugueteAdminReducer(state, action);
}
      
      
      