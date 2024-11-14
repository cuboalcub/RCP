import { Component } from '@angular/core';
import { MediaRCP } from '../MediaForRCP/MediaRCP';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',

})
export class LandingComponent {
  Media: typeof MediaRCP = MediaRCP; // Definición de tipo correcta para la propiedad 'Media'

  constructor(private router: Router) { }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignUp() {
    this.router.navigate(['/signup']);
  }

}
