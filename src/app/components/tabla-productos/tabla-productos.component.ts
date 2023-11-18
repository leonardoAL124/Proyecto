import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {

  constructor( private servicio: ProductosService){}

  data:any
  ngOnInit(){
    this.servicio.getProducto().subscribe(item =>{
      this.data=item;
      this.data=Array.of(this.data)
    })
  }
}
