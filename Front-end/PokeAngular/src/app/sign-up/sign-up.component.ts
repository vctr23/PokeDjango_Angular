import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registroForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContraseña: ['', [Validators.required]]
    }, { validator: this.passwordsIguales });
  }

  passwordsIguales(form: FormGroup) {
    const pass = form.get('contraseña')?.value;
    const confirmPass = form.get('confirmarContraseña')?.value;
    return pass === confirmPass ? null : { noCoincide: true };
  }

  registrar() {
    if (this.registroForm.valid) {
      console.log('Formulario enviado:', this.registroForm.value);
      
      // ✅ Redirigir al usuario a la página de inicio
      this.router.navigate(['']);  
      
    } else {
      console.log('Formulario inválido');
    }
  }
}
