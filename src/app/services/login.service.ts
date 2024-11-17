import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    const data = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<{ token: string }>(
      `${this.baseUrl}${API_ROUTES.user.login}`,
      data,
      { headers }
    );
  }
}
