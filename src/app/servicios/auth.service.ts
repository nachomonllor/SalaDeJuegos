import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private afAuth: AngularFireAuth) {}

  // login({ email, contras }: Usuario): Promise<any> {
  //   return this.afAuth.signInWithEmailAndPassword(email, contras);
  // }
  // // Añadir más métodos como registro, logout, etc.



  constructor(private afAuth: AngularFireAuth) {}

  login(data: Usuario): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(data.nombre, data.contras);
  }

}
