import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { usersActions } from '../actions';

@Injectable()
export class UsersEffects {
  constructor(private _actions$: Actions, private _userService: UserService) {}

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(usersActions.getUsers),
      mergeMap(() =>
        this._userService
          .getUsers$()
          .pipe(
            map((users) => usersActions.getUsersSuccess({ users })),
            catchError((error) => of(usersActions.getUsersError({payload: error})))
          )
      )
    )
  );
}
