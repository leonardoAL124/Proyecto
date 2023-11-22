import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent {

  constructor(private servicio: ProductosService, private ruta: ActivatedRoute){}

  dataProductos: any
  producto: any

  descripcion:any
  precio:any

  ngOnInit() {
    this.servicio.getProducto().subscribe(producto => {
      this.dataProductos = producto;

      this.ruta.params.subscribe(parametro => {

        const id = + parametro['id']
        for (let item of this.dataProductos) {
          if (+item.iden === id)
            this.producto = item
        }

      })
    })
  }

  imprimirFactura(){
    this.servicio.getProducto().subscribe(producto => {
      this.dataProductos = producto;

      this.ruta.params.subscribe(parametro => {

        const id = + parametro['id']
        for (let item of this.dataProductos) {
          if (+item.iden === id)
            this.producto = item.nombre;
            this.descripcion = item.imagen;
            this.precio = item.precio;
        }
        var dd = {
          content: [
            {text: 'Tables', style: 'header'},
            'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
            {text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
            'The following table has nothing more than a body array',
            {
              style: 'tableExample',
              table: {
                body: [
                  ['Nombre', 'Imagen', 'Precio'],
                  [this.producto, this.descripcion, this.precio]
                ]
              }
            },
          ]
        };
        pdfMake.createPdf(dd).open();
      })
    })
  }

}
