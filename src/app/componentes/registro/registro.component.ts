import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  registroData: Usuario = {
    nombre: '',
    contras: '',
    email: ''
  };

  constructor() {}

  onSubmit() {
    console.log('Registro Data:', this.registroData);
    // Aquí puedes implementar tu lógica para el registro
  }
}
