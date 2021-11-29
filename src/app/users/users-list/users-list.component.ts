import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducer';
import { getUsers } from '../../store/actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.dispatch( getUsers() );

    this._store.select('users').subscribe(({users}) => this.users = users);
  }

}
