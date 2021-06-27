import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/Team';
import { TeamsService } from '../../../services/teams/teams.service';
import { UsersService } from '../../../services/auth/users.service';
import { User } from '../../../models/User';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-team',
  templateUrl: './modify-team.component.html',
  styleUrls: ['./modify-team.component.css'],
})
export class ModifyTeamComponent implements OnInit {
  team: Team = new Team();
  // @ts-ignore
  users: User[];
  // @ts-ignore
  participants: string[];

  constructor(
    private teamsService: TeamsService,
    private usersService: UsersService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTeam();
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getTeam() {
    this.activatedRoute.params.subscribe((data) => {
      this.teamsService.getTeam(data.id).subscribe((team) => {
        this.team = team;
      });
    });
  }

  modifyTeam() {
    this.teamsService.modifyTeam(this.team.name, this.participants).subscribe(
      () => {
        this.toastrService.success('Team successfully modified');
      },
      (err) => {
        this.toastrService.error('Error modifying team');
      }
    );
  }
}
