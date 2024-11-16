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
  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }

  goLogin() {
    this.loginService.login(this.username, this.password).subscribe(
      () => {
        alert(" éxito");
        this.router.navigate(['/home']);
      },
      (error) => {
        alert("Error en la cuenta");  
        console.log(error);
      }
    );
  }

  goSignUp() {
    this.router.navigate(['/signup']);
  }
}
