import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Changedoc } from 'src/app/models/changedoc';
import { Statustochangedoc } from 'src/app/models/statustochangedoc';
import { SafetyDocuments } from 'src/app/SafetyDoc/safety-documents';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConfirmationService } from 'src/app/services/confirmation/confirmation.service';
import { SafetyDocumentsService } from 'src/app/services/SafetyD/safety-documents.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  changes: Changedoc[] = [];
  document: SafetyDocuments = new SafetyDocuments();

  constructor(
    private confirmationDialogService: ConfirmationService,
    private seafetydocumentService: SafetyDocumentsService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.loadDoc(data.id);
      this.loadHistory(data.id);
    });
  }

  loadHistory(id: string) {
    this.seafetydocumentService.getChangeHistory(id).subscribe((data) => {
      this.changes = data;
      
    });
  }

  loadDoc(id: string) {
    this.seafetydocumentService.getSafeDoc(id).subscribe((data) => {
      this.document = data;
      console.log(this.document);
    });
  }

  changeStatus(newStatus: string) {
    const statusToChange: Statustochangedoc = {
      id: this.document.id,
      status: newStatus,
      user: this.authService.getUserEmail(),
    };
    this.confirmationDialogService
      .confirm('Warning', 'Please confirm changing status to: ' + newStatus)
      .then(() => {
        this.seafetydocumentService
          .changeDocumentStatus(statusToChange)
          .subscribe(
            () => {
              this.loadHistory(this.document.id.toString());
              this.loadDoc(this.document.id.toString());
              this.toastrService.success('Status changed successfully!');
            },
            () => {
              this.toastrService.error('Error while changing status!');
            }
          );
      });
  }
}
