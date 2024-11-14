import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const data = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<{ access: string, refresh: string }>(
      this.baseUrl + API_ROUTES.user.login,
      data,
      { headers }
    ).pipe(
      tap(tokens => {
        localStorage.setItem('access_token', tokens.access);
        localStorage.setItem('refresh_token', tokens.refresh);
      })
    );
  }
}
