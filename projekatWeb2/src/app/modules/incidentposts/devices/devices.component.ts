import { Component, OnInit, ViewChild } from '@angular/core';
import { Incident } from 'src/app/incidenti/incident';
import { IncidentService } from 'src/app/services/incservice/incident.service';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  allIncidents: Array<Incident>;
  sortedData: Array<Incident>;
  p: number = 1;

  constructor(private incService: IncidentService) {
    this.allIncidents = this.incService.loadIncidents();
    this.sortedData = this.allIncidents.slice();
  }

  sortData(sort: Sort) {
    const data = this.allIncidents.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'Name':
          return compare(a.Name, b.Name, isAsc);
        case 'Type':
          return compare(a.Type, b.Type, isAsc);
        case 'Coordinates':
          return compare(a.Coordinates, b.Coordinates, isAsc);
        case 'Adress':
          return compare(a.Adress, b.Adress, isAsc);
        default:
          return 0;
      }
    });
  }

  dataSource = new MatTableDataSource<Incident>();
  ngOnInit(): void {}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
