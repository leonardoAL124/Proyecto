import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  agregarAlCarrito(producto: any) {
    return this.http.post(this.API_PRODUCTOS, producto);
  }

  constructor(private http: HttpClient) {}
  
  private API_PRODUCTOS = "http://localhost:3200/carrito"

  getProductosCarrito(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS).pipe(
      map(response => Object.values(response))
    )
  }
}
