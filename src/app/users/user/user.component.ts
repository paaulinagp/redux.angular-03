import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { userActions } from '../../store/actions';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User | null;
  loading: boolean = false;
  error: any = null;


  constructor(
    private _router: ActivatedRoute,
    private _store: Store<AppState>
  ) {
    this.user = null;
  }

  ngOnInit(): void {
    this._router.params.subscribe(({id}) => {
      this._store.dispatch(userActions.getUser({id}))
    });

    this._store.select('user').subscribe(({user, loading, error }) => {
      this.user = user;
    })
  }

}
