import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  users: reducers.usersReducer.UsersState,
  user: reducers.userReducer.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducer.usersReducer,
  user: reducers.userReducer.userReducer,
};
