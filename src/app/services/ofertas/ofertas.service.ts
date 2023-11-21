import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  private API_OFERTAS = "https://proyecto-webii-8f7e6-default-rtdb.firebaseio.com/ofertas.json"

  getOfertas(): Observable<any> {
    return this.http.get(this.API_OFERTAS).pipe(
      map(response => Object.values(response))
    )
  }

  postOfertas(ofertas: any): Observable<any> {
    return this.http.post(this.API_OFERTAS, ofertas)
  }
}
