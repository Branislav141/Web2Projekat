import { Component, OnInit } from '@angular/core';
import { Change } from '../../../../models/Change';
import { ConfirmationService } from '../../../../services/confirmation/confirmation.service';

@Component({
  selector: 'app-change-history',
  templateUrl: './change-history.component.html',
  styleUrls: ['./change-history.component.css'],
})
export class ChangeHistoryComponent implements OnInit {
  changes: Change[] = [];

  constructor(private confirmationDialogService: ConfirmationService) {}

  ngOnInit(): void {}

  changeStatus(newStatus: string) {
    this.confirmationDialogService
      .confirm('Warning', 'Please confirm changing status to: ' + newStatus)
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog '));
  }
}
