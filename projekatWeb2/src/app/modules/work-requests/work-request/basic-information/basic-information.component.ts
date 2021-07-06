import { Component, OnInit } from '@angular/core';
import { WorkRequest } from '../../../../models/WorkRequest';
import { AuthService } from '../../../../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { WorkRequstService } from '../../../../services/work-requests/work-requst.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-work-request-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css'],
})
export class BasicInformationComponent implements OnInit {
  workRequest: WorkRequest = new WorkRequest();

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private workRequestService: WorkRequstService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.loadWorkRequest(data.id);
    });
  }

  loadWorkRequest(id: string) {
    this.workRequestService.getWorkRequest(id).subscribe((data) => {
      this.workRequest = data;
    });
  }

  modifyWorkRequest() {
    this.workRequestService
      .modifyWorkRequest(this.workRequest.id.toString(), this.workRequest)
      .subscribe(
        () => {
          this.toastrService.success('Work request successfully modified');
        },
        () => {
          this.toastrService.error('There was an error modifying work request');
        }
      );
  }
}
