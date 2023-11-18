import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS = "https://app-web-2-bc0d2-default-rtdb.firebaseio.com/productos.json"

  getProducto(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS)
  }

  postProducto(producto: any): Observable<any> {
    return this.http.post(this.API_PRODUCTOS, producto)
  }

}
