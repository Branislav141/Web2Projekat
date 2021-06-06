import { Component, OnInit } from '@angular/core';
import { WorkRequest } from '../../models/WorkRequest';

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css'],
})
export class WorkRequestsComponent implements OnInit {
  workRequests: WorkRequest[] = [];

  constructor() {}

  ngOnInit(): void {}
}
