import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent {

  constructor(private servicio: ProductosService, private ruta: ActivatedRoute){}

  dataProductos: any
  producto: any

  ngOnInit() {
    this.servicio.getProducto().subscribe(producto => {
      this.dataProductos = producto;

      this.ruta.params.subscribe(parametro => {

        const id = + parametro['iden']

        for (let item of this.dataProductos) {
          if (item.iden === id)
            this.producto = item
        }

      })
    })
  }

}
