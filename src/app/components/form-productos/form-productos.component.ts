import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  
  constructor(private servicio: ProductosService) { }

  iden:any
  nombre:any
  precio:any
  dispositivo:any
  imagen:any

  saveProductos(formulario:any){

    console.log(formulario.value)

    const temp = {
      iden: formulario.value.iden,
      nombre: formulario.value.nombre,
      precio: formulario.value.precio,
      dispositivo: formulario.value.dispositivo,
      imagen: formulario.value.imagen
    }
    this.servicio.postProducto(temp).subscribe()

    alert("Producto agregado")
    window.location.reload()
  }

}
