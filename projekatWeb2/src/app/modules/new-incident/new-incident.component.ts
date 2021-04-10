import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  showMe:boolean=true;
  showMe1:boolean=false;
  showMe2:boolean=false;
  showMe3:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleBasic(){
    this.showMe=!this.showMe;
    this.showMe1=false;
    this.showMe2=false;
    this.showMe3=false;
  }
  toggleDevices(){
    this.showMe1=!this.showMe1;
    this.showMe=false;
    this.showMe2=false;
    this.showMe3=false;
  }
  toggleResolution(){
    this.showMe2=!this.showMe2;
    this.showMe=false;
    this.showMe1=false;
    this.showMe3=false;
  }
  toggleCalls(){
    this.showMe3=!this.showMe3;
    this.showMe=false;
    this.showMe1=false;
    this.showMe2=false;
  }

}
