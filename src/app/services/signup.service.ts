    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { API_ROUTES } from '../../API-Routes';
    @Injectable({
      providedIn: 'root'
    })
    export class SignupService {
      baseUrl = API_ROUTES.baseUrl;
      constructor(private http: HttpClient) { }
      signup(username: string, password: string, email: string) {
        const data = {
          username,
          password,
          email
        };
      return this.http.post(this.baseUrl + API_ROUTES.user.signup, data);
      }
    }
