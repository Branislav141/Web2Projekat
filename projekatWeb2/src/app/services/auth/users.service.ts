import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:5000/api/users/';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  approveUser(email: string) {
    return this.httpClient.post(this.baseUrl + 'approve', { email });
  }

  declineUser(email: string) {
    return this.httpClient.post(this.baseUrl + 'decline', { email });
  }
}
