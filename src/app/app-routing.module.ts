import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';
import { ServomotorComponent } from './components/servomotor/servomotor.component';
import { Menu_principalComponent } from './components/menu_principal/menu_principal.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige al login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'configuraciones', component: ConfiguracionesComponent, canActivate: [AuthGuard] }, // Protegido
  { path: 'servomotor', component: ServomotorComponent, canActivate: [AuthGuard] }, // Protegido
  { path: 'menu_principal', component: Menu_principalComponent, canActivate: [AuthGuard] }, // Protegido

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
