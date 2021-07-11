import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-safe-doc',
  templateUrl: './new-safe-doc.component.html',
  styleUrls: ['./new-safe-doc.component.css']
})
export class NewSafeDocComponent  {
  constructor() {}
  activeComponent = 'bscinformation';
  // @ts-ignore
  @ViewChild('form', { static: false }) form: NgForm;

  menuItems = [
    { title: 'Basic Information', route: 'bscinformation' },
    { title: 'checklist', route: 'checklist' },
    { title: 'history', route: 'history' },
    { title: 'instructions', route: 'instructions' },
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