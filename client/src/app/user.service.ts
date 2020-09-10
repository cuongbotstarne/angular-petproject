import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//MODEL
import { User } from './user';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('/api/users');
  }
  getUser(idUser: String) {
    return this.http.get(`/api/users/${idUser}`);
  }
  postUser(user: User) {
    return this.http.post('/api/users', user);
  }
  putUser(user: User) {
    return this.http.put(`/api/users/${user._id}`, user);
  }
  deleteUser(_id: String) {
    return this.http.delete(`/api/users/${_id}`);
  }
}
