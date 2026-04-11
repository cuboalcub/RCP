    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { of, delay } from 'rxjs';
    import { API_ROUTES } from '../../API-Routes';
    @Injectable({
      providedIn: 'root'
    })
    export class SignupService {
      baseUrl = API_ROUTES.baseUrl;
      constructor(private http: HttpClient) { }
      signup(username: string, password: string, email: string) {
        console.log('Mock Signup for:', username);
        return of({ message: 'User created successfully' }).pipe(delay(500));
      }
    }
