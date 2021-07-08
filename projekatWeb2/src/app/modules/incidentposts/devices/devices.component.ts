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
 
  ngOnInit(): void {}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
