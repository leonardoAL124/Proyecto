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

  pass:any;
  nick:any;

  login(formulario:any){
    console.log(formulario.value)
    let loginTemp = formulario.value
    loginTemp= JSON.stringify(loginTemp); //pasa de JSON -> String

    //Recorrer los registros de la colección "login"
    this.service.getUsuarios().subscribe(user =>{
      for(let doc of user){
        if (loginTemp === JSON.stringify(doc)) {
          alert("Bienvenido!")
          localStorage.setItem('login', 'true')
          this.ruta.navigate(['/'])
          break;
        }
      }
    })
  }

}
