import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;
  isSidebarOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica si la URL contiene '/login'
        this.isLoginPage = event.url.includes('/login');
      }
      if (event instanceof NavigationEnd) {
        this.isRegisterPage = event.url.includes('/register');
      }
    });
  }
}