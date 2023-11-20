import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-detalles-productos',
  templateUrl: './tabla-detalles-productos.component.html',
  styleUrls: ['./tabla-detalles-productos.component.css']
})
export class TablaDetallesProductosComponent {

  constructor( private servicio: ProductosService, private ruta: ActivatedRoute){}

  dataProductos:any
  productos:any = {}

  ngOnInit(){
    this.servicio.getProducto().subscribe(prod =>{
      this.dataProductos=prod;

      this.ruta.params.subscribe(parametro =>{
        const iden = +parametro['iden'];

        for (let item of this.dataProductos) {
          if (item.iden === iden) {
            this.productos= item;
          }
          
        }
      })
    })
  }

}
