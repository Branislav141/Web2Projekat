import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Incident } from 'src/app/incidenti/incident';
import { IncidentService } from 'src/app/services/incservice/incident.service';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-my-incidents',
  templateUrl: './my-incidents.component.html',
  styleUrls: ['./my-incidents.component.css'],
})
export class MyIncidentsComponent implements OnInit,AfterViewInit {
 
  currentIncident = 'all';
  incidents: Incident[] = [];
  displayedColumns: string[] = ['id','Type','Priority','Confirmed','Status','ETA','Description','ATA','OutageTime','ETR','AffectedCustommers','Calls','Voltage','ScheduledTime'];
  // @ts-ignore
  dataSource: MatTableDataSource<Incident>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

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
        this.ngAfterViewInit();
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 1000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

 

 
}
