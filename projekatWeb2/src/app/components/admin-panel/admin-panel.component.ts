import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AccountStatusEnum } from '../../enums/AccountStatusEnum';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  users: User[] = [];
  userAccountStatus = AccountStatusEnum;

  constructor() {}

  ngOnInit(): void {}
}
