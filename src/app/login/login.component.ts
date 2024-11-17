import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = ''; 
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['home']);
    }
  }


  goBack() {
    this.router.navigate(['']);
  }

  goLogin() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Token recibido:', res.token);
        localStorage.setItem('authToken', res.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        this.error = err.error?.error || 'Error desconocido';
      },
    });
  }

  goSignUp() {
    this.router.navigate(['/signup']);
  }
}
