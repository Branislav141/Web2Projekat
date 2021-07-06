import { Component, OnInit } from '@angular/core';
import { Change } from '../../../../models/Change';
import { ConfirmationService } from '../../../../services/confirmation/confirmation.service';
import { WorkRequstService } from '../../../../services/work-requests/work-requst.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { WorkRequest } from '../../../../models/WorkRequest';
import { StatusToChange } from '../../../../models/StatusToChange';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-change-history',
  templateUrl: './change-history.component.html',
  styleUrls: ['./change-history.component.css'],
})
export class ChangeHistoryComponent implements OnInit {
  changes: Change[] = [];
  workRequest: WorkRequest = new WorkRequest();

  constructor(
    private confirmationDialogService: ConfirmationService,
    private workRequestsService: WorkRequstService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.loadWorkRequest(data.id);
      this.loadHistory(data.id);
    });
  }

  loadHistory(id: string) {
    this.workRequestsService.getChangeHistory(id).subscribe((data) => {
      this.changes = data;
    });
  }

  loadWorkRequest(id: string) {
    this.workRequestsService.getWorkRequest(id).subscribe((data) => {
      this.workRequest = data;
    });
  }

  changeStatus(newStatus: string) {
    const statusToChange: StatusToChange = {
      id: this.workRequest.id,
      status: newStatus,
      user: this.authService.getUserEmail(),
    };
    this.confirmationDialogService
      .confirm('Warning', 'Please confirm changing status to: ' + newStatus)
      .then(() => {
        this.workRequestsService
          .changeWorkRequestStatus(statusToChange)
          .subscribe(
            () => {
              this.loadHistory(this.workRequest.id.toString());
              this.loadWorkRequest(this.workRequest.id.toString());
              this.toastrService.success('Status changed successfully!');
            },
            () => {
              this.toastrService.error('Error while changing status!');
            }
          );
      });
  }
}
