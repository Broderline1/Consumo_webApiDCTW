import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response: any) => {
          // Guardar el token en localStorage
          localStorage.setItem('token', response.token);

          // Cambiar el estado de autenticación
          this.authService.setLoggedIn(true);

          // Redirigir al menú principal
          this.router.navigate(['/menu_principal']);
        },
        error: (error) => {
          // Manejar errores del backend
          this.errorMessage = error.error.mensaje || 'Error al iniciar sesión. Intente nuevamente.';
        },
      });
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); // Redirige al formulario de registro
  }
}