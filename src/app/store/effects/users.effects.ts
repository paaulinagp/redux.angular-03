import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { getUsers, getUsersSuccess } from '../actions';

@Injectable()
export class UsersEffects {
  constructor(private _actions$: Actions, private _userService: UserService) {}

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getUsers),
      mergeMap(() =>
        this._userService
          .getUsers$()
          .pipe(map((users) => getUsersSuccess({ users })))
      )
    )
  );
}
