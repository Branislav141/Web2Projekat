import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Call } from 'src/app/calls/call';
import { CallService } from 'src/app/services/callservice/call.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css'],
})
export class CallsComponent implements OnInit {
  allCalls: Array<Call>;
  sortedData: Array<Call>;
  p: number = 1;

  constructor(private callserv: CallService) {
    this.allCalls = this.callserv.loadCalls();
    this.sortedData = this.allCalls.slice();
  }

  sortData(sort: Sort) {
    const data = this.allCalls.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'callId':
          return compare(a.callId, b.callId, isAsc);
        case 'Reason':
          return compare(a.Reason, b.Reason, isAsc);
        case 'Hazard':
          return compare(a.Hazard, b.Hazard, isAsc);
        case 'Comment':
          return compare(a.Comment, b.Comment, isAsc);

        default:
          return 0;
      }
    });
  }

  dataSource = new MatTableDataSource<Call>();
  ngOnInit(): void {}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
