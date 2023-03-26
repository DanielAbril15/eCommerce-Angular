import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  constructor(private http: HttpClient) {}

  getPurchases() {
    return this.http.get(`${environment.API_URL}purchases`);
  }
}
