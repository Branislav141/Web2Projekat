import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css'],
})
export class NewIncidentComponent {
  constructor() {}
  activeComponent = 'basic-information';
  // @ts-ignore
  @ViewChild('form', { static: false }) form: NgForm;

  menuItems = [
    { title: 'basic-information', route: 'basic-information' },
    { title: 'devices', route: 'devices' },
    { title: 'resolution', route: 'resolution' },
    { title: 'calls', route: 'calls' },
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