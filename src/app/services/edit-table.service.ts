import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades';
import { API_ROUTES } from '../../API-Routes';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../models/actividades';
import { HttpHeaders } from '@angular/common/http';
import { of, delay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EditTableService {
  private url = API_ROUTES.baseUrl;
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json' ,
    'Authorization': `Token ${localStorage.getItem('authToken')}`}
  )
  ;
  id = localStorage.getItem('proyecto');
  
  editTable( data: Proyecto) {
    console.log('Mock Editing Table for Project ID:', this.id, data);
    return of({ message: 'Table updated successfully' }).pipe(delay(600));
  }
  
  
  getTable() {
    console.log('Mock Getting Table for Project ID:', this.id);
    const mockProyecto: Proyecto = {
      nombre: 'Proyecto de Construcción A',
      actividades: {
        'A': { o: 2, mp: 4, p: 6, pert: 4, precedentes: [] },
        'B': { o: 3, mp: 5, p: 8, pert: 5.16, precedentes: ['A'] },
        'C': { o: 1, mp: 2, p: 3, pert: 2, precedentes: ['A'] },
        'D': { o: 4, mp: 6, p: 10, pert: 6.33, precedentes: ['B', 'C'] }
      }
    };
    return of(mockProyecto).pipe(delay(500));
  }
}
