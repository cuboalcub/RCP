import { Component } from '@angular/core';
import { MediaRCP } from '../../MediaForRCP/MediaRCP';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  email: string = "";
  Media: typeof MediaRCP = MediaRCP;

  constructor(private router: Router) { }

  signup() {
    alert("Cuenta creada con éxito");
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

