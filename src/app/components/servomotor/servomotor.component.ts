import { Component } from '@angular/core';
import { ServomotorService } from '../../services/servomotor/servomotor.service';

@Component({
  selector: 'app-servomotor',
  standalone: false,
  templateUrl: './servomotor.component.html',
  styleUrls: ['./servomotor.component.css'],
})
export class ServomotorComponent {
  constructor(private servomotorService: ServomotorService) {}

  abrir() {
    this.servomotorService.abrirServomotor().subscribe({
      next: (response) => console.log('Servomotor abierto:', response),
      error: (error) => console.error('Error al abrir:', error),
    });
  }

  cerrar() {
    this.servomotorService.cerrarServomotor().subscribe({
      next: (response) => console.log('Servomotor cerrado:', response),
      error: (error) => console.error('Error al cerrar:', error),
    });
  }
}
