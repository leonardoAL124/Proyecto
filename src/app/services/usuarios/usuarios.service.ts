import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  private API_USERS_LOG = "http://localhost:3000/login";
  private API_USERS_REG = "http://localhost:3000/usuarios";

  getUsuarios(): Observable <any>{
    return this.http.get(this.API_USERS_LOG)
  }
}
