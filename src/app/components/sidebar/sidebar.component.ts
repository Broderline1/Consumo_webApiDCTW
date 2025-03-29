import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // Elementos del menú
  menuItems = [
    { label: 'Inicio', path: '/menu_principal' },
    { label: 'Configuraciones', path: '/configuraciones' },
    { label: 'Servomotor', path: '/servomotor' },
  ];

  // Propiedad para controlar el estado del sidebar
  isSidebarOpen = true;

  constructor(private router: Router) {}

  // Método para alternar el estado del sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Limpiar el almacenamiento local y de sesión
    localStorage.clear();
    sessionStorage.clear();

    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}