import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {

  constructor(private servicio: UsuariosService, private ruta: Router,private modalService: BsModalService) { }

  dataUsuarios: any;
  modalRef?: BsModalRef;

  ngOnInit() {
    this.servicio.getUsuarios().subscribe(datos => {
      this.dataUsuarios = datos;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /***********************************************/
  //METODO ELIMINAR
  eliminarUsuario(id: any) {
    this.servicio.deleteUsuarios(id).subscribe()
  }

}
