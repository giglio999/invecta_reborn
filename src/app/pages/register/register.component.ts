import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DefaultLoginLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log('Usuário registrado:', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no registro:', err);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
