import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  private API_USERS_LOG = "http://localhost:3000/usuarios";

  /**************************************************************/
  //METODO GET
  getUsuarios(): Observable <any>{
    return this.http.get(this.API_USERS_LOG)
  }

  /**************************************************************/
  //METODO POST
  postUsuarios(servicio: any): Observable<any> {
    return this.http.post(this.API_USERS_LOG, servicio)
  }

  /**************************************************************/
  //METODO PUT
  putUsuarios(servicio: any, nombre: any): Observable<any> {
    this.API_USERS_LOG = `${this.API_USERS_LOG}/${nombre}`
    return this.http.put(this.API_USERS_LOG, servicio)
  }

  /**************************************************************/
  //METODO DELETE
  deleteUsuarios(nombre: any): Observable<any> {
    this.API_USERS_LOG = `${this.API_USERS_LOG}/${nombre}`
    return this.http.delete(this.API_USERS_LOG)
  }

}
