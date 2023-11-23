import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {

  modalRef?: BsModalRef;
  validRol = JSON.parse(localStorage.getItem('usuario') || '{}');
  rol = this.validRol.rol;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  validarRol(): boolean{
    if (this.rol === 'admin') {
      return true;
    } else if(this.rol === 'user'){
      return false;
    }else{
      return false;
    }
  }

}
