// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  accessMessage: string='';

  constructor(private router: Router) {}

  login() {

    // Supongamos que tienes un array de usuarios que quieres guardar en localStorage
    const users = [
    {nombre: 'Israel', rol: 'Admin', fechaAlta: '6/13/2024', email: 'usuario1@example.com', password: '123456' },
    { email: 'usuario2@example.com', password: 'password123'},
    { email: 'isrm_123@hotmail.com', password: '123456'}
    ];

    // Convertir el array de usuarios a formato JSON
    const usersJSON = JSON.stringify(users);

    // Guardar los usuarios en el localStorage bajo la clave 'users'
    localStorage.setItem('users', usersJSON);

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: any) => u.email === this.email && u.password === this.password);
    console.log('user:'+user);
    if (user) {
      this.accessMessage='Logeado correctamente';
      this.router.navigate(['/users']);

    } else {
      this.errorMessage = 'Usuario o contraseña incorrecta';
    }
  }
}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {}*/
