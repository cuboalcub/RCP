import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtén el token de localStorage
    const accessToken = localStorage.getItem('access_token');
    
    // Si el token existe, clona la solicitud y agrega el token en el header
    if (accessToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `JWT ${accessToken}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
