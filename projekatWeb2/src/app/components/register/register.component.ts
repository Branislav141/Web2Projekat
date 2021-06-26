import { Component } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  confirmedPassword = '';
  user: User = new User();

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  register() {
    if (this.confirmedPassword !== this.user.password) {
      this.toastr.error('Error', 'Passwords do not match');
      return;
    }

    if (
      !this.user.username.length ||
      !this.user.password.length ||
      !this.user.firstName.length ||
      !this.user.lastName.length ||
      !this.user.accountType.length ||
      !this.user.address.length ||
      !this.user.birthday ||
      !this.user.email
    ) {
      this.toastr.error('Error', 'Please check your inputs');
      return;
    }
    this.authService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/login']);
        this.toastr.success('Registration successful!', 'Successful!');
      },
      () => {
        this.toastr.error('Error while registering', 'Error!');
      }
    );
  }
}
