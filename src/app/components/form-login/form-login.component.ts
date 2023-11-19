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
    console.log(formulario.value)
    let loginTemp = formulario.value
    loginTemp= JSON.stringify(loginTemp); 
    console.log(loginTemp)

    this.service.getUsuarios().subscribe(user =>{
      for(let doc of user){
        if (loginTemp === JSON.stringify(doc)) {
          alert("Bienvenido!")
          localStorage.setItem('login', 'true')
          this.ruta.navigate(['/'])
          break;
        }else{
          alert("Credenciales incorrectas!")
        }
      }
    })
    
  }

}
