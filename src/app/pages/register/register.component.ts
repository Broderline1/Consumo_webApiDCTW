import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      telefono: [''],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { nombre, correo, contraseña, telefono } = this.registerForm.value;

      this.authService.register(nombre, correo, contraseña, telefono).subscribe({
        next: () => {
          // Redirigir al login después de registrarse
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Manejar errores del backend
          this.errorMessage = error.error.mensaje || 'Error al registrarse. Intente nuevamente.';
        },
      });
    }
  }
}