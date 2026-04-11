import { Component } from '@angular/core';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-rc-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rc-viewer.component.html',
  styleUrl: './rc-viewer.component.css'
})
export class RcViewerComponent {
  nombre: string = localStorage.getItem('proyectoNombre') || "Proyecto de Construcción A";
  url: string = "https://firebasestorage.googleapis.com/v0/b/roaau-javascript.appspot.com/o/imagenes%2Farbol_actividades_con_imagenes_matplotlib.png?alt=media&token=a84c4d7a-393a-456f-8cf1-fb1d0efd4172";
  
  // Mock data para visualización premium
  nodosDetalle = [
    { id: 'A', descripcion: 'Cimentación', esCritica: true, duracion: 4 },
    { id: 'B', descripcion: 'Estructura', esCritica: true, duracion: 6 },
    { id: 'C', descripcion: 'Instalaciones', esCritica: false, duracion: 2 },
    { id: 'D', descripcion: 'Acabados', esCritica: true, duracion: 5 },
    { id: 'E', descripcion: 'Limpieza', esCritica: false, duracion: 1 }
  ];

  rutaCriticaStr = "A → B → D";
  tiempoTotal = 15;

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
    localStorage.removeItem('proyecto');
  }
}

