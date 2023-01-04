

import { Action, createReducer, on} from '@ngrx/store';
import { Favorito } from '../../shared/models/favorito.interface';
import * as favoritoActions from '../actions/favoritos.action';




export interface FavoritoState {

    idFavorito:string,
    favoritos: Favorito[],
    loading:boolean,
    loaded:boolean,
    error:any;

}

export const initialState: FavoritoState = {

    idFavorito: '',
    favoritos: new Array<Favorito>(),
    loading: false,
    loaded:false,
    error:null
    
}


const _favoritoReducer = createReducer(

        
    initialState,



    on(favoritoActions.getAllFavoritosByUser, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),

    on(favoritoActions.getAllFavoritosByUserSuccess, (state, action) => ({
        ...state,
        favoritos: action.favoritos,
        loading: false,
        loaded: true,
        error: null,
      })),

    on(favoritoActions.getAllFavoritosByUserFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),

    on(favoritoActions.deleteFavorito, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
    })),

    on(favoritoActions.deleteFavoritoSuccess, (state, { idFavorito }) => ({
        ...state,
        favoritos: [...state.favoritos.filter((favorito) => favorito.id !== idFavorito )],
        loading: false,
        loaded: true,
        error: null,
    })),

    on(favoritoActions.deleteFavoritoFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
    })),
        
    

);


export function favoritoReducer(state: FavoritoState | undefined, action: Action) {
    return  _favoritoReducer(state, action);
}


