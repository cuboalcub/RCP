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
    
    // Verificar si el token existe antes de proceder
    if (!accessToken) {
      console.error('Access token not found');
      return;
    }
    const JWT = `JWT ${accessToken}`
    const headers = new HttpHeaders({
      'Authorization': JWT,
    });
    console.log(JWT);
    
    

    // Realiza la solicitud GET con el token en los headers
    this.http.get(this.baseUrl + API_ROUTES.project.view, ).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error during GET request:', error);
      }
    );
  }
}
