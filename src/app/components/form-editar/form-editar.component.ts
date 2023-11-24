import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent {

  constructor(private servicio: UsuariosService, private ruta: Router, private rutas: ActivatedRoute) { }

  dataUsuarios: any
  usuario: any

  //METODO PUT
  actualizarUsuario(id:string, nombre: string, apellido: string, edad: string, genero: string, usuario: string, password: string, rol: string) {
    const años = +edad;
    const iden = +id

    const usuarios = {
      id,
      nombre,
      apellido,
      edad,
      genero,
      usuario,
      password,
      rol
    }

    this.servicio.putUsuarios(usuarios, id).subscribe()
    window.location.reload()
  }
}
