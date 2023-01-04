

import { ActionReducerMap } from '@ngrx/store';

import { AuthEffects } from './auth/effects/auth.effects';
import * as AuthReducer from './auth/reducers/auth.reducer';

import { UserEffects } from './usuario/effects/user.effects';
import * as UserReducer from './usuario/reducers/user.reducer';

import { FavoritosEffects } from './favoritos/effects/favoritos.effects';
import * as FavoritoReducer from './favoritos/reducer/favoritos.reducer';

import { JuguetesEffects } from './juguete/effects/juguetes.effects';
import * as JugueteReducer from './juguete/reducer/juguete.reducers';

import { JuguetesAdminEffects } from './juguete-admin/effects/juguetes-admin.effects';
import * as JugueteAdminReducer from './juguete-admin/reducer/juguete-admin.reducers';

import { ExperienciasEffects } from './experiencias/effects/experiencias.effects';
import * as ExperienciaReducer from './experiencias/reducer/experiencias.reducers';

import { ExperienciasAdminEffects } from './experiencias-admin/effects/experiencias-admin.effects';
import * as ExperienciaAdminReducer from './experiencias-admin/reducer/experiencias-admin.reducers';


export interface AppState {
  auth: AuthReducer.AuthState;
  user: UserReducer.UserState;
  favorito: FavoritoReducer.FavoritoState;
  juguete: JugueteReducer.JugueteState;
  jugueteAdmin: JugueteAdminReducer.JugueteAdminState;
  experiencia: ExperienciaReducer.ExperienciaState;
  experienciaAdmin: ExperienciaAdminReducer.ExperienciaAdminState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: AuthReducer.authReducer,
  user: UserReducer.userReducer,
  favorito: FavoritoReducer.favoritoReducer,
  juguete:JugueteReducer.jugueteReducer,
  jugueteAdmin:JugueteAdminReducer.jugueteAdminReducer,
  experiencia:ExperienciaReducer.experienciaReducer,
  experienciaAdmin:ExperienciaAdminReducer.experienciaAdminReducer
};

export const EffectsArray: any[] = [
  AuthEffects,
  UserEffects,
  FavoritosEffects,
  JuguetesEffects,
  JuguetesAdminEffects,
  ExperienciasEffects,
  ExperienciasAdminEffects,
];
