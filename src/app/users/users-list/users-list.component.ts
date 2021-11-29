import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducer';
import { usersActions } from '../../store/actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  loading: boolean = false;

  error: any = null;
  
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.dispatch( usersActions.getUsers() );

    this._store.select('users').subscribe(({users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
  }

}
