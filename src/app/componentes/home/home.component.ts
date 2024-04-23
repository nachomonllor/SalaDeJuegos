import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  isLoggedIn = false;
  usuario: Usuario | undefined; // usuario puede ser de tipo Usuario o undefined

  constructor(private router: Router) {} //  private authService: AuthService) {}

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.checkLoginStatus();
  // }

  // async checkLoginStatus() {
  //   const userJson = localStorage.getItem('user');
  //   if (userJson) {
  //     this.usuario = JSON.parse(userJson) as Usuario; // Asumimos que el string es un JSON válido de un Usuario
  //     if (this.usuario && await this.authService.login(this.usuario)) {
  //       this.isLoggedIn = true;
  //     }
  //   }
  // }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.usuario = undefined;
  }
}