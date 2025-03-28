import { Component, OnInit } from '@angular/core';
import { ConfiguracionesService, Configuracion } from '../../services/configuracion/configuracion.service';

@Component({
  selector: 'app-configuraciones',
  standalone: false,
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css'],
})
export class ConfiguracionesComponent implements OnInit {
  configuraciones: Configuracion[] = [];
  nuevaConfiguracion: Configuracion = {
    horarios: [],
    cantidad_porcion: 0,
    modo_manual: false,
    dispensador: null,
  };
  editando = false;
  configuracionSeleccionada: Configuracion | null = null;

  constructor(private configuracionesService: ConfiguracionesService) {}

  ngOnInit(): void {
    this.cargarConfiguraciones();
  }

  cargarConfiguraciones(): void {
    this.configuracionesService.getConfiguraciones().subscribe((data) => {
      this.configuraciones = data;
    });
  }

  agregarHorario(horario: string): void {
    this.nuevaConfiguracion.horarios.push(horario);
  }

  crearConfiguracion(): void {
    this.configuracionesService.createConfiguracion(this.nuevaConfiguracion).subscribe(() => {
      this.cargarConfiguraciones();
      this.nuevaConfiguracion = { horarios: [], cantidad_porcion: 0, modo_manual: false, dispensador: null };
    });
  }

  editarConfiguracion(configuracion: Configuracion): void {
    this.editando = true;
    this.configuracionSeleccionada = { ...configuracion };
  }

  actualizarConfiguracion(): void {
    if (this.configuracionSeleccionada) {
      this.configuracionesService
        .updateConfiguracion(this.configuracionSeleccionada._id!, this.configuracionSeleccionada)
        .subscribe(() => {
          this.cargarConfiguraciones();
          this.editando = false;
          this.configuracionSeleccionada = null;
        });
    }
  }

  eliminarConfiguracion(id: string): void {
    this.configuracionesService.deleteConfiguracion(id).subscribe(() => {
      this.cargarConfiguraciones();
    });
  }
}
