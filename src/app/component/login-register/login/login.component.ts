import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {UserService} from "../../../services/user/user.services";
import { User } from '../../../shared/models/User';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../../services/auth/authservice/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatCheckboxModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  contrasena: string = "";
  mostrarContrasena: boolean = false;

  currentUser: User | undefined; // Almacena el usuario actual

  constructor(private router: Router, private http: HttpClient, private userService: UserService, private authService: AuthService) {}

  verificarCredenciales() {
    this.userService.verifyUserCredentials(this.email, this.contrasena).subscribe((user: User | undefined) => {
      if (user) {
        this.currentUser = user;
        this.userService.setCurrentUser(user);
        this.redirectUser();
        this.router.navigate(['/products']);
      } else {
        // Si las credenciales son incorrectas, muestra un mensaje
        this.router.navigate(['/products']);
        alert('Usuario y/o contraseña inválidos');
      }
    });
  }

  redirectUser() {
    if (this.currentUser?.premium) {
      this.router.navigate(['']);
    } else {
      // Redirige al usuario no premium a su pantalla
      this.router.navigate(['/nopremium']);
    }
  }
  // Método para redirigir a la página de recuperación de contraseña
  redirigirARecuperacionContrasena() {
    this.router.navigate(['/forgotpass']); // Cambia '/recuperar-contrasena' por la ruta deseada
  }

  redirigirARegistro() {
    this.router.navigate(['/register']);
  }
}
