import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-request',
  templateUrl: './work-request.component.html',
  styleUrls: ['./work-request.component.css'],
})
export class WorkRequestComponent {
  constructor() {}
  activeComponent = 'basic-information';
  // @ts-ignore
  @ViewChild('form', { static: false }) form: NgForm;

  menuItems = [
    { title: 'Basic Information', route: 'basic-information' },
    { title: 'History of state changes', route: 'changes-history' },
    { title: 'Multimedia attachments', route: 'multimedia-attachments' },
    { title: 'EquipmentToAdd', route: 'equipment' },
  ];
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.form.dirty) {
      $event.returnValue = true;
    }
  }

  setActiveComponent(route: string) {
    this.activeComponent = route;
  }
}
