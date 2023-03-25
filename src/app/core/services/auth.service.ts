import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${environment.API_URL}users/login`, {
      email,
      password,
    });
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  getUser() {
    const user = localStorage.getItem('user');
    return user;
  }
}
