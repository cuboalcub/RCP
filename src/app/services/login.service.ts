import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const data = { username, password };
    console.log(data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    // Retorna el observable para que el componente se suscriba
    return this.http.post<{ access: string, refresh: string }>(
      this.baseUrl + API_ROUTES.user.login,
      data,
      { headers }
    );
  }
}
