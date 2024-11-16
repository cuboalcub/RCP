import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { MediaRCP } from '../../MediaForRCP/MediaRCP';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',  
})
export class SignUpComponent { 
  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  email: string = "";
  Media: typeof MediaRCP = MediaRCP;
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

  goBack() {
    this.router.navigate(['/']);
  }
}
