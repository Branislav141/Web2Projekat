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
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        () => {
          this.router.navigate(['/default/dashboard']);
          this.toastr.success('Login successful!', 'Successful!');
        },
        (err) => {
          this.toastr.error('Error while login', 'Error!');
        }
      );
  }
}
