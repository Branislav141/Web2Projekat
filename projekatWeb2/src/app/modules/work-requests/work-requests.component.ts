import { Component, OnInit } from '@angular/core';
import { WorkRequest } from '../../models/WorkRequest';
import { AuthService } from '../../services/auth/auth.service';
import { WorkRequstService } from '../../services/work-requests/work-requst.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css'],
})
export class WorkRequestsComponent implements OnInit {
  workRequests: WorkRequest[] = [];

  constructor(
    private authService: AuthService,
    private workRequestsService: WorkRequstService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.workRequestsService
      .getAllWorkRequestsForUser(this.authService.currentUser.email)
      .subscribe((data) => {
        this.workRequests = data;
      });
  }

  goToWorkRequest(id: number) {
    this.router.navigate(['default/work-request/' + id]);
  }
}
