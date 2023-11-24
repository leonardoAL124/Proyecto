import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor(private service: UsuariosService, private ruta: Router){}

  password:any;
  usuario:any;

  login(formulario:any){
    console.log(formulario.value);

    this.service.getUsuarios().subscribe((users) =>{
      console.log('Usuarios obtenidos:', users);

      let foundUser;

      for (const user of users) {
        console.log('Usuario actual:', user);

        if (user.usuario === formulario.value.usuario && user.password === formulario.value.password) {
          let userID = user.id;
          let userNom = user.nombre;
          let userApe = user.apellido;
          localStorage.setItem('usuarioID', userID)
          localStorage.setItem('usuarioNom', userNom)
          localStorage.setItem('usuarioApe', userApe)
          foundUser = user;
          break;
        }
      }

      console.log('Usuario encontrado:', foundUser);

      if (foundUser) {
        alert('Bienvenido!');
        window.location.reload()
        localStorage.setItem('login', 'true');
        localStorage.setItem('usuario', JSON.stringify(foundUser));
        this.ruta.navigate(['/']);
      } else {
        alert('Usuario o contraseña incorrecto!');
      }
    });
    
  }

}
