import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = 'http://localhost:5000/api/auth'; // URL base del backend para autenticación

  constructor(private http: HttpClient, private router: Router) {}

  // Método para iniciar sesión
  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { correo: email, contraseña: password });
  }

  // Método para guardar el estado de inicio de sesión
  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
    this.router.navigate(['/login']);
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}