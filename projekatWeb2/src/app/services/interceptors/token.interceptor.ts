import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.getIsLoggedIn()) {
      const token = localStorage.getItem('token');
      const tokenReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(tokenReq);
    } else {
      const tokenReq = req.clone();
      return next.handle(tokenReq);
    }
  }
}
