import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/auth';
  signup(name: string, email: string, password: string) {
    this.http
      .post(this.baseUrl + '/signup', {
        name,
        email,
        password,
      })
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
  }

  signin(email: string, password: string) {
    this.http.post(`${this.baseUrl}/signin`, {
      email,
      password,
    }).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
