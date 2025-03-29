//Modulos importantes
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- ¡Agrega esta línea!
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

//Interfaces
import { AppComponent } from './app.component';
import { ConfiguracionesComponent } from '../app/components/configuraciones/configuraciones.component';
import { ServomotorComponent } from './components/servomotor/servomotor.component';
import { LoginComponent } from './pages/login/login.component'; // Asegúrate de importar todos los componentes
import { RegisterComponent } from './pages/register/register.component'; // Ejemplo de otro componente
import { SidebarComponent } from './components/sidebar/sidebar.component';

 // Importa el módulo de rutas
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    //Aqui se declaran las interfaces
    AppComponent,
    ConfiguracionesComponent,
    ServomotorComponent,
    LoginComponent, // Asegúrate de declarar todos los componentes aquí
    RegisterComponent, // Ejemplo de otro componente
    SidebarComponent,
    
  ],
  imports: [
    RouterModule.forRoot([]), // Configura el enrutador
    BrowserModule,
    FormsModule, // <-- ¡Agrega esta línea!
    HttpClientModule,
    AppRoutingModule, // Agrega el módulo de rutas aquí
    ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
