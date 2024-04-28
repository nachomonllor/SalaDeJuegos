
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { AuthService } from '../../servicios/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  // loginData: Usuario = {
  //   nombre: '', contras: '',
  //   email: ''
  // }; 


  // constructor(private router: Router) {}
  // // constructor(private authService: AuthService) {} //, private router: Router) {}



  // onSubmit() {
  //  /*
  //   this.authService.login(this.loginData).then(res => {
  //     console.log('Login successful', res);
  //     this.router.navigate(['/home']); // Asegúrate de que la ruta '/home' está configurada en tu router
  //   }).catch(err => {
  //     console.error('Login failed', err);
  //   });
  //  */
  // }


  user = {
    login: '',
    password: ''
  };

  onSubmit() {
    console.log('Usuario:', this.user.login);
    console.log('Contraseña:', this.user.password);
    // Aquí agregarías la lógica para verificar las credenciales
  }
  
}

