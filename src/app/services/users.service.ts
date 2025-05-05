import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  public http = inject(HttpClient);

  getAllUsers() {
    return this.http.get<IUser[]>(this.url);
  }
}
