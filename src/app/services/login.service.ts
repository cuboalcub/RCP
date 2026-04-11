import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../API-Routes';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = API_ROUTES.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    console.log('Mock Login with:', username);
    const mockResponse = { token: 'mock-token-12345' };
    localStorage.setItem('authToken', mockResponse.token);
    return of(mockResponse).pipe(delay(500));
  }
}
