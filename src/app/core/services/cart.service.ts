import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  getCartProduct() {
    return this.http.get(`${environment.API_URL}cart`);
  }

  delCartProduct() {
    return this.http.delete(`${environment.API_URL}cart`);
  }
  patchCartProduct(data: any) {
    return this.http.patch(`${environment.API_URL}cart`, data);
  }
}
