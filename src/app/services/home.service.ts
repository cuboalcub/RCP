import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { Token } from '@angular/compiler';
import { Project } from '../models/project/project.modelo';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }


  viewTable() {
    const token = localStorage.getItem('authToken');
    
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`,
    });
    return this.http.get<Project[]>(this.baseUrl + API_ROUTES.project.view, { headers });
  }

  logout() {
    localStorage.removeItem('authToken'); // Elimina el token
    sessionStorage.removeItem('authToken'); // Si lo guardaste en sessionStorage
    console.log('Sesión cerrada.');
  }
  
  logoutBackend() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}` 
    });
  
    return this.http.post<{ message: string }>(
      `${this.baseUrl}${API_ROUTES.user.logout}`, 
      {}, 
      { headers }
    ).subscribe({
      next: () => {
        this.logout(); // Limpia el token local
      },
      error: (err) => {
        console.error('Error al cerrar sesión:', err);
      }
    });
  }
  
}
