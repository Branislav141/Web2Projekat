import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WorkRequest} from '../../models/WorkRequest';
import {AuthService} from '../../services/auth/auth.service';
import {WorkRequstService} from '../../services/work-requests/work-requst.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css'],
})
export class WorkRequestsComponent implements OnInit, AfterViewInit {
  currentWorkRequest = 'all';
  workRequests: WorkRequest[] = [];
  displayedColumns: string[] = ['id', 'startDate', 'phoneNumber', 'status', 'address'];
  // @ts-ignore
  dataSource: MatTableDataSource<WorkRequest>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService: AuthService,
    private workRequestsService: WorkRequstService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllWorkRequests();
  }

  getAllWorkRequests() {
    this.currentWorkRequest = 'all';
    this.workRequestsService
      .getAllWorkRequest()
      .subscribe((data) => {
        this.workRequests = data;
        this.dataSource = new MatTableDataSource(data);
        this.ngAfterViewInit();
      });
  }

  getMyWorkRequests() {
    this.currentWorkRequest = 'mine';
    this.workRequestsService
      .getAllWorkRequestsForUser(this.authService.currentUser.email)
      .subscribe((data) => {
        this.workRequests = data;
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

  goToWorkRequest(id: number) {
    this.router.navigate(['default/work-request/' + id]);
  }
}
