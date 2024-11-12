import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }

  goLogin() {
    
  }

  goSignUp() {
    this.router.navigate(['/signup']);
  }

}
