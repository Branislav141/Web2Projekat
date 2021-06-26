import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (!this.auth.isAdmin()) {
      this.toastr.warning(
        'Warning',
        'You are not allowed to access this route.'
      );
      return false;
    } else {
      return true;
    }
  }
}
