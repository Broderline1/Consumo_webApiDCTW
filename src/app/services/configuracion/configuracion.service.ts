import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  private apiUrl = 'http://localhost:5000/api/configuraciones';

  constructor(private http: HttpClient) {}

  // Obtener todas las configuraciones
  getConfiguraciones(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Crear una nueva configuración
  createConfiguracion(configuracion: any): Observable<any> {
    return this.http.post(this.apiUrl, configuracion);
  }

  // Actualizar una configuración existente
  updateConfiguracion(id: string, configuracion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, configuracion);
  }

  // Eliminar una configuración
  deleteConfiguracion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
