import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.authService.getIsLoggedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
