import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})

export class AlumnosComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      nota: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  submitForm() {
    if (this.alumnoForm.valid) {
      console.log('Formulario válido. Datos enviados:');
      console.log('Nombre:', this.alumnoForm.value.nombre);
      console.log('Apellido:', this.alumnoForm.value.apellido);
      console.log('Nota:', this.alumnoForm.value.nota);
    } else {
      console.log('Formulario no válido. Revise los campos.');
    }
  }

  resetForm() {
    this.alumnoForm.reset();
  }
}

