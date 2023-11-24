import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent {

  constructor(private servicio: ProductosService, private ruta: ActivatedRoute, private carritoService: CarritoService) { }

  dataProductos: any
  producto: any

  prodID:any;
  prodNom:any;
  prodImg:any;
  prodPre:any;

  ngOnInit() {
    this.servicio.getProducto().subscribe(producto => {
      this.dataProductos = producto;

      this.ruta.params.subscribe(parametro => {

        const id = + parametro['id']
        for (let item of this.dataProductos) {
          if (+item.iden === id)
          this.prodID = item.iden;
          this.prodNom = item.nombre;
          this.prodImg = item.imagen;
          this.prodPre = item.precio;
            this.producto = item
        }

      })
    })
  }

  cont = 0;

  agregarAlCarrito(producto: any) {
    console.log('Producto a agregar:', producto);


    // Verifica que producto sea un objeto y tenga la propiedad 'iden'
    if (producto && producto.iden) {
      this.carritoService.agregarAlCarrito(producto);
      this.cont++
      console.log(this.cont)
      localStorage.setItem("contador", this.cont.toString())
      window.location.reload()
    } else {
      console.error('El producto no tiene un identificador definid:', producto);
    }
  }
}
