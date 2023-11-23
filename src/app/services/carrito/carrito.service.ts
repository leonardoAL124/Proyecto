import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { 
    console.log('Servicio de Carrito instanciado');
  }
  

  productosEnCarrito: any[] = [];

  agregarAlCarrito(producto: any) {
    this.productosEnCarrito.push(producto);
  }
}
