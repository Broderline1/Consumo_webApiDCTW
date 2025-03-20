import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../services/configuracion/configuracion.service';

@Component({
  selector: 'app-configuraciones',
  standalone: false,
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css'],
})
export class ConfiguracionesComponent implements OnInit {
  configuraciones: any[] = [];
  nuevaConfiguracion: any = {};

  constructor(private configuracionService: ConfiguracionService) {}

  ngOnInit(): void {
    this.cargarConfiguraciones();
  }

  cargarConfiguraciones(): void {
    this.configuracionService.getConfiguraciones().subscribe((data) => {
      this.configuraciones = data;
    });
  }

  crearConfiguracion(): void {
    this.configuracionService.createConfiguracion(this.nuevaConfiguracion).subscribe(() => {
      this.cargarConfiguraciones();
      this.nuevaConfiguracion = {};
    });
  }

  actualizarConfiguracion(id: string, configuracion: any): void {
    this.configuracionService.updateConfiguracion(id, configuracion).subscribe(() => {
      this.cargarConfiguraciones();
    });
  }

  eliminarConfiguracion(id: string): void {
    this.configuracionService.deleteConfiguracion(id).subscribe(() => {
      this.cargarConfiguraciones();
    });
  }
}
