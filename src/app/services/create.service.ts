import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Proyecto } from '../models/actividades';
import { API_ROUTES } from '../../API-Routes';
import { of, delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private baseUrl = API_ROUTES.baseUrl;
  token = localStorage.getItem('authToken');
  constructor(private http: HttpClient) { }


  create(proyecto: Proyecto) {
    console.log('Mock Creating Project:', proyecto.nombre);
    // Simulate saving the project ID so the next views work
    localStorage.setItem('proyecto', 'mock-project-id-999');
    return of(proyecto).pipe(delay(800));
  }
}
