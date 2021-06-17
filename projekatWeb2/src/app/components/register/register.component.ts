import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AccountTypeEnum } from '../../enums/AccountTypeEnum';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  accountTypes = AccountTypeEnum;
  user: User = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/default/dashboard']);
        this.toastr.success('Registration successful!', 'Successful!');
      },
      (err) => {
        this.toastr.error('Error while registering', 'Error!');
      }
    );
  }
}
