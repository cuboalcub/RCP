import { Component } from '@angular/core';
import { SignupService } from '../app/services/signup.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',  // Asegúrate de que este archivo exista
})
export class SignUpComponent { 
  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  email: string = "";

  constructor(private signupService: SignupService, private router: Router) { }

  signup() {
    this.signupService.signup(this.username, this.password, this.email).subscribe(
      () => {
        alert("Cuenta creada con éxito");
        this.router.navigate(['/login']);
      },
      (error) => {
        alert("Error al crear la cuenta");
        console.log(error);
      }
    );
  }
}
