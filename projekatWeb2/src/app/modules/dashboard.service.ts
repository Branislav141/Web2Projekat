import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Incident } from '../incidenti/incident';
import { IncidentService } from '../services/incservice/incident.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService implements OnInit {
  incidents: Incident[] = [];
  constructor(private incService: IncidentService,) {}

  bigChart() {
    return [
      {
        name: 'Planed',
        data: [122, 166, 200, 250, 290, 360, 3300],
      },
      {
        name: 'Un planed',
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
    
    ];
  }

  
    ngOnInit(): void {
    this.getAllPlanedIncidents();
  
  }
  
  getAllPlanedIncidents() {

    this.incService
      .getAllIncidents()
      .subscribe((data) => {
        this.incidents = data;
        
      });
  }
  

  

  pieChart() {
    return [
      {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'Internet Explorer',
        y: 11.84,
      },
      {
        name: 'Firefox',
        y: 10.85,
      },
      {
        name: 'Edge',
        y: 4.67,
      },
      {
        name: 'Safari',
        y: 4.18,
      },
      {
        name: 'Sogou Explorer',
        y: 1.64,
      },
      {
        name: 'Opera',
        y: 1.6,
      },
      {
        name: 'QQ',
        y: 1.2,
      },
      {
        name: 'Other',
        y: 2.61,
      },
    ];
  }
}

