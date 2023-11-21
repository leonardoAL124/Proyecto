import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';

@Component({
  selector: 'app-tabla-ofertas',
  templateUrl: './tabla-ofertas.component.html',
  styleUrls: ['./tabla-ofertas.component.css']
})
export class TablaOfertasComponent {

  constructor( private servicio: OfertasService, private ruta: Router){}

  validLogin = localStorage.getItem('login');

  get validacionLogin(): boolean {
    return this.validLogin === 'false'
  }

  validar(){
    if (!this.validacionLogin) {
    } else {
      alert("Por favor ingrese en su cuenta!")
      this.ruta.navigate(['/ofertas'])
      console.log(this.validacionLogin)
    }
  }

  data:any
  ngOnInit(){
    this.servicio.getOfertas().subscribe(item =>{
      this.data=item
      console.log(this.data)
    })
  }

}
