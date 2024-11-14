import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }

  viewTable() {
    const accessToken = localStorage.getItem('access_token');
    
    const headers = new HttpHeaders({
      'Authorization': `JWT ${accessToken}`
    });

    // Realiza la solicitud GET con el token en los headers
    this.http.get(this.baseUrl + API_ROUTES.project.view, { headers });
  }
}
