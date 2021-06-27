import { Component, Input, OnInit } from '@angular/core';
import { WorkRequest } from '../../../../models/WorkRequest';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-work-request-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css'],
})
export class BasicInformationComponent implements OnInit {
  workRequest: WorkRequest = new WorkRequest();
  currentUser = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser.email;
  }

  addWorkRequest() {
    this.workRequest.userCreated = this.currentUser;
    console.log(this.workRequest);
  }
}
