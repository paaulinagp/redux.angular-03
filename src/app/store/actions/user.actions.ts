import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const getUser = createAction('[USER] Get user', props<{ id: string }>());
export const getUserSuccess = createAction('[USER] Get user success', props<{ user: User }>());
export const getUserError = createAction('[USER] Get user error', props<{ payload: any }>());
