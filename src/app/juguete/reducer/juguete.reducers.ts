

import { Action, createReducer, on} from '@ngrx/store';
import * as jugueteActions from '../actions/juguete.actions';
import { Categoria } from 'src/app/shared/models/categoria.interface';
import { Juguete } from 'src/app/shared/models/juguete.interface';


export interface JugueteState {

    categorias:Categoria[],
    categoria:Categoria,
    breadcrumbs:string [],
    categoriaSeleccionada:string,
    isBusquedaBuscador:boolean,
    isBusquedaCategoria:boolean,
    literalABuscar:string,
    numeroPagina:number,
    isFavorito:boolean,
    idFavorito:string,
    juguetes: Juguete [],
    juguete: Juguete,
    loading:boolean,
    loaded:boolean,
    error:any;
}

export const initialState: JugueteState = {

    categorias:[],
    categoriaSeleccionada:'Categorías',
    breadcrumbs:['Categorías'],
    categoria: {
              id:'', imagen_categoria:'', imagen_subcat1:'', imagen_subcat2:'', nombre_categoria:'', subcategoria1:'',subcategoria2:''
            }, 
    numeroPagina: 1,
    isFavorito: false,
    isBusquedaBuscador: false,
    isBusquedaCategoria: false,
    literalABuscar:'',
    idFavorito:'',
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


const _jugueteReducer = createReducer(

        
    initialState,

    on( jugueteActions.createFavorito, ( state ) => ({
    
        ...state, 
        loading: true,
        loaded: false,
        error: null,
    })),

    on( jugueteActions.createFavoritoSuccess, (state, action ) => ({
        ...state,
        idFavorito:action.idFavorito,
        isFavorito: (Number.parseInt(action.idFavorito) > 0) ? true: false ,
        loading: false,
        loaded: true,
        error: null,
      })),
    
    on( jugueteActions.createFavoritoFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),

    on( jugueteActions.getFavoritoByUserAndIdJuguete , (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( jugueteActions.getFavoritoByUserAndIdJugueteSuccess, (state, action) => ({
        ...state,
        idFavorito: action.idFavorito,
        isFavorito: (Number.parseInt(action.idFavorito) > 0 ) ? true : false,
        loading: false,
        loaded: true,
        error: null,
    })),

    on( jugueteActions.getFavoritoByUserAndIdJugueteFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on(jugueteActions.deleteFavoritoFromDetalleJuguete, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
    })),

    on(jugueteActions.deleteFavoritoFromDetalleJugueteSuccess, (state, action) => ({
        ...state,
        idFavorito:action.idFavorito,
        isFavorito: false,
        loading: false,
        loaded: true,
        error: null,
    })),

    on(jugueteActions.deleteFavoritoFromDetalleJugueteFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on(jugueteActions.setTipoConsultaCatalogo, (state, action) => ({
        ...state,
        isBusquedaBuscador: action.isBusquedaBuscador,
        isBusquedaCategoria: action.isBusquedaCategoria,
        literalABuscar: action.literalABuscar,
        numeroPagina:1, 
        loading: true,
        loaded: false,
        error: null,
      })),


    on(jugueteActions.getJuguetes, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on(jugueteActions.getJuguetesSuccess, (state, action) => ({
        ...state,
        numeroPagina: (action.juguetes.length > 0) ? state.numeroPagina + 1 : state.numeroPagina, 
        juguetes: state.juguetes.concat(action.juguetes.filter((item:Juguete) => item.publicado == true )),
        loading: false,
        loaded: true,
        error: null,
      })),

    on(jugueteActions.getJuguetesFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),


    on( jugueteActions.getJugueteById , (state) => ({
        ...state,
        idFavorito:'',
        isFavorito:false,
        loading: true,
        loaded: false,
        error: null,
      })),

    on( jugueteActions.getJugueteByIdSuccess, (state, action) => ({
        ...state,

        juguete: action.juguete,
        loading: false,
        loaded: true,
        error: null,
    })),

    on( jugueteActions.getJugueteByIdFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),


    on(jugueteActions.getAllCategorias, (state) => ({
      ...state,
      loading: true,
      loaded: false,
      error: null,
    })),

  on(jugueteActions.getAllCategoriasSuccess, (state, action) => ({
      ...state,
      categorias: action.categorias,
      loading: false,
      loaded: true,
      error: null,
    })),

  on(jugueteActions.getAllCategoriasFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
  })),

  on(jugueteActions.getAllCategoriasByJugueteId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),

  on(jugueteActions.getAllCategoriasByJugueteIdSuccess, (state, action) => ({
      ...state,
      categoria: action.categoria,
      loading: false,
      loaded: true,
      error: null,
    })),

  on(jugueteActions.getAllCategoriasByJugueteIdFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
  })),

  on(jugueteActions.addCategoriaToBreadCrumbs, (state, { categoria }) => ({
    ...state,
    breadcrumbs: state.breadcrumbs.concat(categoria),
  })),

  on(jugueteActions.deleteCategoriaToBreadCrumbs, (state, { indexCategoriaEnBreadCrumb }) => ({
    ...state,
    breadcrumbs: [...state.breadcrumbs.slice(0, indexCategoriaEnBreadCrumb + 1) ],
  })),

  on(jugueteActions.setCategoriaSeleccionada, (state, { categoriaSeleccionada }) => ({
    ...state,
    categoriaSeleccionada:categoriaSeleccionada,
  })),

  on(jugueteActions.resetJuguete, (state) => ({ 
    ...state,
    juguetes:[],
  })),


);


export function jugueteReducer(state: JugueteState | undefined, action: Action) {
          return  _jugueteReducer(state, action);
}
      
      
      