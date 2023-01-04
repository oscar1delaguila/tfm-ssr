

import { Action, createReducer, on} from '@ngrx/store';
import { Auth } from '../models/auth.interface';
import * as actions from '../actions/auth.action';





export interface AuthState {

    auth:Auth,
    loading:boolean,
    loaded:boolean,
    error:any;

}

export const initialState: AuthState = {

    auth: { isAdmin:false, user_id:'', access_token:'', email:'', password:'' },
    loading: false,
    loaded:false,
    error:null
    
}


const _authReducer = createReducer(

        
    initialState,



    on( actions.login, ( state ) => ({
    
        ...state, 
        loading: true,
        loaded: false,
        error: null,
    })),

    on(actions.loginSuccess, (state, action) => ({
        ...state,
        auth: action.credentials,
        loading: false,
        loaded: true,
        error: null,
      })),
    
    on(actions.loginFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),

    on( actions.isTheAdmin, ( state,{ isAdmin } ) => ({
    
        ...state, 
        isAdmin: isAdmin
    })),


    on(actions.logout, () => initialState)
    

);


export function authReducer(state: AuthState | undefined, action: Action) {
    return  _authReducer(state, action);
}


