import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { HttpHeaders } from '@angular/common/http';
import { of, delay } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class RutaCriticaService {

constructor(private http: HttpClient) { }
private url = API_ROUTES.baseUrl;

headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Token ' + localStorage.getItem('authToken')
 });
id = localStorage.getItem('proyecto');
getRutaCritica() {
    console.log('Mock Getting Critical Path for Project:', this.id);
    const mockRC = {
      nodos: [
        { id: 'Inicio', esCritica: true },
        { id: 'A', esCritica: true },
        { id: 'B', esCritica: true },
        { id: 'C', esCritica: false },
        { id: 'D', esCritica: true },
        { id: 'Fin', esCritica: true }
      ],
      ruta_critica: ['Inicio', 'A', 'B', 'D', 'Fin'],
      tiempo_total: 15.5
    };
    return of(mockRC).pipe(delay(700));
  }
}