import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    // Verificar si el usuario ya está autenticado al cargar la aplicación
    this.loggedIn = !!localStorage.getItem('loggedInUser');
  }

  login(email: string, password: string): boolean {
    console.log('email:'+email+' '+'password:'+password);
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('storedUsers:'+storedUsers);
    const user = storedUsers.find((u: any) => u.email === email && u.password === password);
    console.log('userrs::'+user);
    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
