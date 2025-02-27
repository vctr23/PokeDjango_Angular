import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registroForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private authService: ServiceService) {
    this.registroForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContraseña: ['', [Validators.required]]
    }, { validator: this.passwordsIguales });
  }

  passwordsIguales(form: FormGroup) {
    return form.get('contraseña')?.value === form.get('confirmarContraseña')?.value ? null : { noCoincide: true };
  }

  registrar() {
    if (this.registroForm.valid) {
      const datos = {
        username: this.registroForm.value.usuario,
        email: this.registroForm.value.correo,
        password: this.registroForm.value.contraseña
      };

      this.authService.register_users(datos).subscribe({
        next: (response) => {
          console.log(response);
          alert('Registro exitoso');
          // Redirigir a la página de inicio
          this.router.navigate(['']);  
        },
        error: (error) => {
          console.error(error);
          alert('Error en el registro');
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
