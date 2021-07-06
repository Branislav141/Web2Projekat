import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Team} from '../../models/Team';
import {TeamsService} from '../../services/teams/teams.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {WorkRequest} from '../../models/WorkRequest';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit, AfterViewInit {
  teams: Team[] = [];
  displayedColumns: string[] = ['id', 'name', 'participants', 'delete'];
  // @ts-ignore
  dataSource: MatTableDataSource<Team>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private teamsService: TeamsService,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    this.teamsService.getTeams().subscribe((data) => {
      this.teams = data;
      this.dataSource = new MatTableDataSource(data);
      this.ngAfterViewInit();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 2000);
  }


  deleteTeam(teamName: string) {
    this.teamsService.deleteTeam(teamName).subscribe(
      () => {
        this.teams = this.teams.filter((x) => x.name !== teamName);
        this.toastrService.success('Team successfully deleted');
        this.loadTeams();
      },
      (error) => {
        this.toastrService.error('Error deleting the team!' + error);
      }
    );
  }

  modifyTeam(teamId: number) {
    this.router.navigate(['default/modify-team/' + teamId]);
  }
}
