import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: {}) {
    return this.http.post(`${environment.API_URL}users/login`, {
      data,
    });
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
