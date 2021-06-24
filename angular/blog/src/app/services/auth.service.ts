import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';


export interface USER {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface AUTH_RES {
  user: USER;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*
  private http: HttpClient
  constructor(http: HttpClient) {
    this.http = http
  }
  */

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}

  baseUrl = 'http://localhost:3000/auth';
  signup(name: string, email: string, password: string) {
    this.http
      .post(this.baseUrl + '/signup', {
        name,
        email,
        password,
      })
      .subscribe(
        (data) => this.router.navigate(['signin']),
        (err) => console.log(err)
      );
  }

  signin(email: string, password: string) {
    this.http.post<AUTH_RES>(`${this.baseUrl}/signin`, {
      email,
      password,
    }).subscribe(
      data => {
        this.userService.setUser(data);
        this.router.navigate(['articles'])
      },
      err => console.log(err)
    );
  }
}
