import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';

@Component({
  selector: 'app-detalle-ofertas',
  templateUrl: './detalle-ofertas.component.html',
  styleUrls: ['./detalle-ofertas.component.css']
})
export class DetalleOfertasComponent {

  constructor(private servicio: OfertasService, private ruta: ActivatedRoute){}

  dataOfertas: any
  oferta: any

  ngOnInit() {
    this.servicio.getOfertas().subscribe(producto => {
      this.dataOfertas = producto;

      this.ruta.params.subscribe(parametro => {

        const id = + parametro['iden']

        for (let item of this.dataOfertas) {
          if (item.iden === id)
            this.oferta = item
        }

      })
    })
  }
}
