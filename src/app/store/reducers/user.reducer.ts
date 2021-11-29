import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { userActions } from '../actions';


export interface UserState {
  id: string | null;
  user: User | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};

const _userReducer = createReducer(
  userInitialState,
  on(userActions.getUser, (state, {id}) => ({...state, loading: true, id })),
  on(userActions.getUserSuccess, (state, {user}) => ({...state, loading: false, loaded: true, user: {...user} })),
  on(userActions.getUserError, (state, {payload}) => ({...state, loading: false, loaded: false, error: { url: payload.url, name: payload.name, message: payload.message } })),
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}