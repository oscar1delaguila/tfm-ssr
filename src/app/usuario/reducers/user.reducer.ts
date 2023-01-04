

import { Action, createReducer, on} from '@ngrx/store';
import * as actions from '../actions/user.action';
import { Usuario } from '../../shared/models/usuario.interface';




export interface UserState {
    user: Usuario;
    loading: boolean;
    loaded: boolean;
    error: any;
  }
  
  export const initialState: UserState = {
    user: { access_token:'', email:'', apellidos:'', birth_date: new Date(), id:'',newPassword: '', newsletter:false, nombre:'', password:'' },
    loading: false,
    loaded: false,
    error: null,
  };
  

const _userReducer = createReducer(

        
    initialState,

    on(actions.register, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),
      on(actions.registerSuccess, (state, action) => ({
        ...state,
        user: action.user,
        loading: false,
        loaded: true,
        error: null,
      })),
      on(actions.registerFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),
      on(actions.updateUser, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),
      on(actions.updateUserSuccess, (state, action) => ({
        ...state,
        user: {
                ...state.user,
                nombre: action.user.nombre,
                apellidos: action.user.apellidos,
                birth_date: action.user.birth_date,
                email: action.user.email,
                newsletter: action.user.newsletter
              },
        loading: false,
        loaded: true,
        error: null,
      })),
      on(actions.updateUserFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      })),
      on(actions.getUserById, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
      })),
      on(actions.getUserByIdSuccess, (state, action) => ({
        ...state,
        user: {
          ...state.user,
          id:action.user.id,
          nombre: action.user.nombre,
          apellidos: action.user.apellidos,
          birth_date: action.user.birth_date,
          email: action.user.email,
          newsletter: action.user.newsletter
        },
        loading: false,
        loaded: true,
        error: null,
      })),
      on(actions.getUserByIdFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: { payload },
      }))
    );
    

export function userReducer(state: UserState | undefined, action: Action) {
    return  _userReducer(state, action);
}


