import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: ServiceService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login exitoso:', response);
          alert('Login exitoso');
          localStorage.setItem('user', JSON.stringify(response.user)); // Guardar usuario en localStorage
          this.router.navigate(['']); // Volver a pantalla de inicio
        },
        error => {
          console.error('Error en login:', error);
          if (error.status === 404) {
            alert('Usuario no encontrado');
          } else if (error.status === 400) {
            alert('Contraseña incorrecta');
          } else {
            alert('Error en el login o en el servidor');
          }
        }
      );
    }
  }
}
