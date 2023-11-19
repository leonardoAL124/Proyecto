import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-detalles-productos',
  templateUrl: './tabla-detalles-productos.component.html',
  styleUrls: ['./tabla-detalles-productos.component.css']
})
export class TablaDetallesProductosComponent {

  constructor( private servicio: ProductosService){}

  productos:any

  ngOnInit(){
    this.servicio.getProducto().subscribe(item =>{
      this.productos=item
      console.log(this.productos)
    })
  }

}
