import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { HttpHeaders } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class RutaCriticaService {

constructor(private http: HttpClient) { }
private url = API_ROUTES.baseUrl;

headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Token ' + localStorage.getItem('authToken')
 });
id = localStorage.getItem('proyecto');
getRutaCritica() {
  return this.http.get<any>(this.url + API_ROUTES.project.rc + this.id, { headers: this.headers });
  }
}