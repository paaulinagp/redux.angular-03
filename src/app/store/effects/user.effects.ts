import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { userActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(private _actions$: Actions, private _userService: UserService) {}

  getUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userActions.getUser),
      mergeMap((action) =>
        this._userService
          .getUser$(action.id)
          .pipe(
            map((user) => userActions.getUserSuccess({ user })),
            catchError((error) => of(userActions.getUserError({payload: error})))
          )
      )
    )
  );
}
