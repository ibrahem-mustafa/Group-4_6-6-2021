import { Injectable } from '@angular/core';
import { USER, AUTH_RES } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // setUserData
  setUser(data: AUTH_RES) {
    const userDataAsString = JSON.stringify(data.user);
    window.localStorage.setItem('user', userDataAsString)
    window.localStorage.setItem('token','Bearer ' + data.token)
  }
  // getUser
  getUser(): USER | null {
    const userData = window.localStorage.getItem('user');
    if (!userData) return null;
    const user: USER = JSON.parse(userData)
    return user
  }

  getToken() {
    return window.localStorage.getItem('token')!
  }

  // true => true
  // !true => false
  // !!true => !false => true
  // !!!true => !!false => !true => false

  // isLoggedIn
  isLoggedIn(): boolean {
    return !!this.getUser()
  }

  clear() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token');
  }
}


