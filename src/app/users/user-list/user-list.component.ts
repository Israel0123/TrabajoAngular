import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  /*deleteUser(email: string) {
    this.users = this.users.filter(user => user.email !== email);
    localStorage.setItem('users', JSON.stringify(this.users));
  }*/

  editUser(email: string) {
    this.router.navigate(['/user-form', email]);
  }

  createUser() {
    this.router.navigate(['/user-form']);
  }

  deleteUser(email: string): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (confirmDelete) {
      this.users = this.users.filter(user => user.email !== email);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

}
