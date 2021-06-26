import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User = new User();

  constructor(private httpClient: HttpClient) {}

  login(model: any) {
    return this.httpClient.post(this.baseUrl + 'login', model).pipe(
      map((data: any) => {
        if (data) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          this.decodedToken = this.jwtHelper.decodeToken(data.token);
          this.currentUser = data.user;
        }
      })
    );
  }

  register(user: User) {
    return this.httpClient.post(this.baseUrl + 'register', user);
  }

  getIsLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token || undefined);
  }

  isAdmin() {
    if (localStorage.getItem('user')) {
      this.currentUser = JSON.parse(localStorage.getItem('user') || '');
      return this.getIsLoggedIn() && this.currentUser.accountType === 'Admin';
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
