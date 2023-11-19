import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  modalRef?: BsModalRef;
  validLogin = localStorage.getItem('login');
  
  constructor(private modalService: BsModalService, private ruta: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get validacionLogin(): boolean {
    return this.validLogin === 'false'
  }

  cerrar(){
    localStorage.setItem('login', 'false')
    this.ruta.navigate(['/'])
  }
}
