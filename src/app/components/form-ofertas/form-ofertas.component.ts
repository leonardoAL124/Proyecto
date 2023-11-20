import { Component } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';

@Component({
  selector: 'app-form-ofertas',
  templateUrl: './form-ofertas.component.html',
  styleUrls: ['./form-ofertas.component.css']
})
export class FormOfertasComponent {

  constructor(private servicio: OfertasService) { }

  iden:any
  nombre:any
  precioN:any
  precioO:any
  dispositivo:any
  imagen:any

  saveOfertas(formulario:any){

    console.log(formulario.value)

    const temp = {
      iden: formulario.value.iden,
      nombre: formulario.value.nombre,
      precioA: formulario.value.precio,
      precioO: formulario.value.precio,
      dispositivo: formulario.value.dispositivo,
      imagen: formulario.value.imagen
    }
    this.servicio.postOfertas(temp).subscribe()

    alert("Producto en oferta agregado")
  }

}
