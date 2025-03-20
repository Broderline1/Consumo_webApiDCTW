//Modulos importantes
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- ¡Agrega esta línea!
import { RouterModule, RouterOutlet } from '@angular/router';

//Interfaces
import { AppComponent } from './app.component';
import { ConfiguracionesComponent } from '../app/components/configuraciones/configuraciones.component';
import { ServomotorComponent } from './components/servomotor/servomotor.component';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas

@NgModule({
  declarations: [
    //Aqui se declaran las interfaces
    AppComponent,
    ConfiguracionesComponent,
    ServomotorComponent
  ],
  imports: [
    RouterModule.forRoot([]), // Configura el enrutador
    BrowserModule,
    FormsModule, // <-- ¡Agrega esta línea!
    HttpClientModule,
    AppRoutingModule, // Agrega el módulo de rutas aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
