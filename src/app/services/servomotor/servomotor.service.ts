import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServomotorService {
  private apiUrl = 'http://localhost:5000/api'; // URL de tu backend

  constructor(private http: HttpClient) {}

  abrirServomotor(): Observable<any> {
    const body = { accion: 'abrir' };
    return this.http.post(`${this.apiUrl}/servo`, body);
  }

  cerrarServomotor(): Observable<any> {
    const body = { accion: 'cerrar' };
    return this.http.post(`${this.apiUrl}/servo`, body);
  }
}
