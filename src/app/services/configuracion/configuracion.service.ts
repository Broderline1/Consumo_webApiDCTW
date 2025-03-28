import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Configuracion {
  _id?: string;
  horarios: string[];
  cantidad_porcion: number;
  modo_manual: boolean;
  dispensador?: string | null; // Opcional
}

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionesService {
  private apiUrl = 'http://localhost:5000/api/configuraciones'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  getConfiguraciones(): Observable<Configuracion[]> {
    return this.http.get<Configuracion[]>(this.apiUrl);
  }

  createConfiguracion(configuracion: Configuracion): Observable<Configuracion> {
    return this.http.post<Configuracion>(this.apiUrl, configuracion);
  }

  updateConfiguracion(id: string, configuracion: Configuracion): Observable<Configuracion> {
    return this.http.put<Configuracion>(`${this.apiUrl}/${id}`, configuracion);
  }

  deleteConfiguracion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
