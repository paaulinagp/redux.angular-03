import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { getUsers, getUsersSuccess, getUsersError } from '../actions';


export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

const _usersReducer = createReducer(
  usersInitialState,
  on(getUsers, (state) => ({...state, loading: true })),
  on(getUsersSuccess, (state, {users}) => ({...state, loading: false, loaded: true, users: [...users] })),
  on(getUsersError, (state, {payload}) => ({...state, loading: false, loaded: false, error: payload })),
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}