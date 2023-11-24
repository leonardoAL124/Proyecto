import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private ruta: ActivatedRoute, private servicio: CarritoService) { }

  dataProductos: any
  producto: any
  descripcion: any
  precio: any

  data:any
  ngOnInit(){
    this.servicio.getProductosCarrito().subscribe(item =>{
      this.data=item
      console.log(this.data)
    })
  }

  imprimirFactura() {
    /* this.servicio.getProductosCarrito().subscribe(producto => {
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
            { image: '../../../assets/images/logo.png', width: 50, height: 50},
            'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
            { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader' },
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
    })*/
    alert("PAGO REALIZADO.....")
    window.location.reload()
  } 

}
