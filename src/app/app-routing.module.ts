import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesComponent } from '../app/components/configuraciones/configuraciones.component';
import { ServomotorComponent } from './components/servomotor/servomotor.component';
import { Menu_principalComponent } from './components/menu_principal/menu_principal.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: 'login', component: LoginComponent},
  { path: 'configuraciones', component: ConfiguracionesComponent }, // Ruta de configuraciones
  { path: 'servomotor', component: ServomotorComponent },
  { path: 'menu_principal', component: Menu_principalComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas
  exports: [RouterModule], // Exporta el módulo de rutas
})
export class AppRoutingModule {}