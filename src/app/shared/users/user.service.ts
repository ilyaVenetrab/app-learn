import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: IUsers[] | null = null;

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public setUsers(users: IUsers[]) {
      this._users = users;
  }

  public remove(name: string): IUsers[] | null {
    const users = this._users?.filter((user: IUsers) => user.name !== name);
    this._users = users ? users : null;
    return this._users;
  }

  public add(user: IUsers): IUsers[] | null {
    console.log('user => ', user);
    this._users?.unshift(user);
    return this._users;
  }
}

export interface IUsers {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: IUsersAddress,
  phone?: string,
  website?: string,
  company?: IUserCompany
}

export interface IUsersAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

export interface IUserCompany {
  name: string,
  catchPhrase: string,
  bs: string
}
