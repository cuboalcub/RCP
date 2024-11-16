import { Component } from '@angular/core';
import { MediaRCP } from '../MediaForRCP/MediaRCP';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] // Corregido a 'styleUrls'
})
export class LandingComponent {
  Media: typeof MediaRCP = MediaRCP; // Definición de tipo correcta para la propiedad 'Media'

  ngOnInit(): void {
    // Código para ejecutar al inicializar el componente
  }
}
