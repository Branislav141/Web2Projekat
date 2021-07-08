import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Incident } from 'src/app/incidenti/incident';
import { IncidentService } from 'src/app/services/incservice/incident.service';



@Component({
  selector: 'app-my-incidents',
  templateUrl: './my-incidents.component.html',
  styleUrls: ['./my-incidents.component.css'],
})
export class MyIncidentsComponent implements OnInit {
 
  currentIncident = 'all';
  incidents: Incident[] = [];
  displayedColumns: string[] = ['id','Type','Priority','Confirmed','Status','ETA','Description','ATA','OutageTime','ETR','AffectedCustommers','Calls','Voltage','ScheduledTime'];
  // @ts-ignore
  dataSource: MatTableDataSource<Incident>;

  // @ts-ignore


  constructor(
    
    private incService: IncidentService,
    
  ) {
  }

  ngOnInit(): void {
    this.getAllIncidents();
    
  }

  getAllIncidents() {
    this.currentIncident = 'all';
    this.incService
      .getAllIncidents()
      .subscribe((data) => {
        this.incidents = data;
        this.dataSource = new MatTableDataSource(data);
        
      });
  }

  

 

 
}
