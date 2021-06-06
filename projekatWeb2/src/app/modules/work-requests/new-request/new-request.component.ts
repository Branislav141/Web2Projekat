import { Component } from '@angular/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css'],
})
export class NewRequestComponent {
  activeComponent = 'basic-information';

  menuItems = [
    { title: 'Basic Information', route: 'basic-information' },
    { title: 'History of state changes', route: 'changes-history' },
    { title: 'Multimedia attachments', route: 'multimedia-attachments' },
    { title: 'Equipment', route: 'equipment' },
  ];

  constructor() {}

  setActiveComponent(route: string) {
    this.activeComponent = route;
  }
}
