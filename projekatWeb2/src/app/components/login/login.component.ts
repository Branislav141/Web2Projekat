import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login() {
    if (!this.email.length || !this.password.length) {
      this.toastr.warning('All fields are required', 'Warning');
      return;
    }
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        () => {
          const accountStatus = this.authService.currentUser.accountStatus;
          if (accountStatus === 'Declined') {
            this.authService.logOut();
            this.toastr.warning('Error', 'Your account is declined');
            return;
          }
          this.router.navigate(['/default/dashboard']);
          this.toastr.success('Login successful!', 'Successful!');
        },
        (err) => {
          this.toastr.error('Error while login', 'Error!');
        }
      );
  }
}
