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
  constructor(private modalService: BsModalService, private ruta: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  validLogin = localStorage.getItem('login');

  temp=true;

  validacion(validLogin:any){
    if (validLogin === 'false') {
      this.temp;
    } else {
      !this.temp;
    }
  }

  cerrar(){
    localStorage.setItem('login', 'false')
    this.ruta.navigate(['/'])
  }
}
