import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string;
  constructor( private _http: HttpClient) {
    this._url = 'https://reqres.in/api/';
  }


  getUsers$() {
    return this._http.get(`${this._url}users?delay=3`)
    .pipe(
      map( (response: any) => response.data )
    );
  }

  getUser$(id: string) {
    return this._http.get(`${this._url}users/${id}`)
    .pipe(
      map( (response: any) => response.data )
    );
  }
}
