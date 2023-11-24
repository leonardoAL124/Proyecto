import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  constructor(private servicio: UsuariosService) { }

  id:any
  nombre: any
  apellido: any
  edad: any
  genero: any
  usuario: any
  password: any
  rol: any


  saveUsuarios(formulario: any) {

    console.log(formulario.value)

    const temp = {
      id: formulario.value.id,
      nombre: formulario.value.nombre,
      apellido: formulario.value.apellido,
      edad: formulario.value.edad,
      genero: formulario.value.genero,
      usuario: formulario.value.usuario,
      password: formulario.value.password,
      rol: formulario.value.rol
    }
    this.servicio.postUsuarios(temp).subscribe()

    alert("USUARIO REGISTRADO")
    window.location.reload()
  }

}
