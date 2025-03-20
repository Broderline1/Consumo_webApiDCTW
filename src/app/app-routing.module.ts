import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesComponent } from '../app/components/configuraciones/configuraciones.component';
import { ServomotorComponent } from './components/servomotor/servomotor.component';

const routes: Routes = [
  { path: '', redirectTo: '/configuraciones', pathMatch: 'full' }, // Ruta por defecto
  { path: 'configuraciones', component: ConfiguracionesComponent }, // Ruta de configuraciones
  { path: 'servomotor', component: ServomotorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas
  exports: [RouterModule], // Exporta el módulo de rutas
})
export class AppRoutingModule {}
