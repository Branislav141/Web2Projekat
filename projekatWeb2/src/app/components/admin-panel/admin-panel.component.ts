import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/auth/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  approveUser(email: string) {
    this.usersService.approveUser(email).subscribe(
      () => {
        const user = this.users.find((x) => x.email === email);
        // @ts-ignore
        user.accountStatus = 'Approved';
        this.toastrService.success('User successfully approved');
      },
      () => {
        this.toastrService.error('Error activating user');
      }
    );
  }

  declineUser(email: string) {
    this.usersService.declineUser(email).subscribe(
      () => {
        const user = this.users.find((x) => x.email === email);
        // @ts-ignore
        user.accountStatus = 'Declined';
        this.toastrService.success('User successfully declined');
      },
      () => {
        this.toastrService.error('Error declining user');
      }
    );
  }
}
