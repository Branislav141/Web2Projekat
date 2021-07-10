import { Component, OnInit } from '@angular/core';
import { WorkRequstService } from '../../../services/work-requests/work-requst.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { WorkRequestToCreate } from '../../../models/WorkRequestToCreate';

@Component({
  selector: 'app-new-work-request',
  templateUrl: './new-work-request.component.html',
  styleUrls: ['./new-work-request.component.css'],
})
export class NewWorkRequestComponent implements OnInit {
  workRequest: WorkRequestToCreate = new WorkRequestToCreate();
  currentUser = '';

  constructor(
    private workRequestService: WorkRequstService,
    private router: Router,
    private authService: AuthService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {
    //this.currentUser = this.authService.getUserEmail();
  }

  addWorkRequest() {
   // this.workRequest.userCreated = this.authService.getUserEmail();
    this.workRequestService.createWorkRequest(this.workRequest).subscribe(
      () => {
        this.tostr.success('Work request created successfully!');
        this.router.navigate(['default/work-requests']);
      },
      () => {
        this.tostr.error('There was an error creating work request');
      }
    );
  }
}
