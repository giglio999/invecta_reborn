import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        console.log('Login bem-sucedido:', res);
        // Salvar token se houver e navegar para o sistema
      },
      error: (err) => {
        console.error('Erro no login:', err);
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
