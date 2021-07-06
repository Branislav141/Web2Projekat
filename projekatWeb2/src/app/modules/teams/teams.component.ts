import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { TeamsService } from '../../services/teams/teams.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(
    private teamsService: TeamsService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe((data) => {
      this.teams = data;
    });
  }

  deleteTeam(teamName: string) {
    this.teamsService.deleteTeam(teamName).subscribe(
      () => {
        this.teams = this.teams.filter((x) => x.name !== teamName);
        this.toastrService.success('Team successfully deleted');
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
