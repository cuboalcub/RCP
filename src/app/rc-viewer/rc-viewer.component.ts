import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RutaCriticaService } from '../services/rc-viewer.service';
@Component({
  selector: 'app-rc-viewer',
  templateUrl: './rc-viewer.component.html',
})
export class RcViewerComponent {

  nombre: string = "Proyecto";
  url: string = "https://firebasestorage.googleapis.com/v0/b/roaau-javascript.appspot.com/o/imagenes%2Farbol_actividades_con_imagenes_matplotlib.png?alt=media&token=a84c4d7a-393a-456f-8cf1-fb1d0efd4172";
  nodos= {}
  constructor(private location: Location, private router: Router, private rutaCriticaService: RutaCriticaService) { }

  ngOnInit(): void {
    this.rutaCriticaService.getRutaCritica().subscribe((data: any) => {
      this.nombre = data.data.nombre;
      this.url = data.data.url;
      this.nodos = data.data.nodos; 
      console.log(data);
    });
  }   

  goBack(): void {
    this.location.back();
    localStorage.removeItem('proyecto');
  }
}
