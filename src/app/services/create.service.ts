import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Proyecto } from '../models/actividades';
import { API_ROUTES } from '../../API-Routes';


@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private baseUrl = API_ROUTES.baseUrl;
  token = localStorage.getItem('authToken');
  constructor(private http: HttpClient) { }


  create(proyecto: Proyecto) {
    const Headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${this.token}`,
    });

    return this.http.post<Proyecto>(
      `${this.baseUrl}${API_ROUTES.project.add}`, 
      proyecto, 
      { headers: Headers }
    );
  }
}
