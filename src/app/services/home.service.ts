import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { Project } from '../models/project/project.modelo';
import { of, delay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }


  viewTable() {
    console.log('Mock Fetching Projects');
    const mockProjects: Project[] = [
      { id: 1, nombre: 'Proyecto de Construcción A' },
      { id: 2, nombre: 'Lanzamiento de Producto B' },
      { id: 3, nombre: 'Mantenimiento de Red C' }
    ];
    return of(mockProjects).pipe(delay(500));
  }
  logout() {
    localStorage.removeItem('authToken'); // Elimina el token
    sessionStorage.removeItem('authToken'); // Si lo guardaste en sessionStorage
    console.log('Sesión cerrada.');
  }
  
  logoutBackend() {
    console.log('Mock Backend Logout');
    this.logout();
    return of({ message: 'Success' }).pipe(delay(300));
  }

  deleteProject(id: string) {
    console.log('Mock Deleting Project:', id);
    return of({ message: 'Project deleted successfully' }).pipe(delay(500));
  }
  
}
