import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = 'Recepcionista';
  createdAt: string = new Date().toLocaleString();
  profileImage: string = '';
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('id');
    if (email) {
      this.isEditing = true;
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email);
      if (user) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.confirmPassword = user.password;
        this.role = user.role;
        this.createdAt = user.createdAt;
        this.profileImage = user.profileImage;
      }
    }
  }

  saveUser() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (this.isEditing) {
      const index = users.findIndex((u: any) => u.email === this.email);
      if (index !== -1) {
        users[index] = {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
          createdAt: this.createdAt,
          profileImage: this.profileImage
        };
      }
    } else {
      users.push({
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role,
        createdAt: this.createdAt,
        profileImage: this.profileImage
      });
    }

    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/users']);
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
