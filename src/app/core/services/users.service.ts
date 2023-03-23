import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUserDTO } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // createUser(data:CreateUserDTO){
  //   this.http.post(`${environment.API_URL}/users`,data)
  // }
  // al ser una api de la academia es preferible no crear mas usuarios para no llenar la memoria de la base de datos
}
