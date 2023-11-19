import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {

  constructor( private servicio: ProductosService, private ruta: Router){}

  validLogin = localStorage.getItem('login');

  get validacionLogin(): boolean {
    return this.validLogin === 'false'
  }

  validar(){
    if (!this.validacionLogin) {
    } else {
      alert("Por favor ingrese en su cuenta!")
      this.ruta.navigate(['/productos'])
      console.log(this.validacionLogin)
    }
  }

  data:any
  ngOnInit(){
    this.servicio.getProducto().subscribe(item =>{
      this.data=item
      console.log(this.data)
    })
  }

}
