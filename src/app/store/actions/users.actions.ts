import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const getUsers = createAction('[USERS] Get users');
export const getUsersSuccess = createAction('[USERS] Get users success', props<{users: User[]}>());
export const getUsersError = createAction('[USERS] Get users error', props<{payload: any}>());
