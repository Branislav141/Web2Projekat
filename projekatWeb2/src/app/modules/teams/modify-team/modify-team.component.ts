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
  participants: string[] = [];

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
      this.users = data.filter((x) => x.accountType === 'Member');
    });
  }

  addRemoveParticipant(checked: boolean, participant: string) {
    if (checked) {
      this.participants.push(participant);
    } else {
      this.participants = this.participants.filter((x) => x !== participant);
    }
  }

  isChecked(participant: string) {
    return this.participants.findIndex((x) => x === participant) > -1;
  }

  getTeam() {
    this.activatedRoute.params.subscribe((data) => {
      this.teamsService.getTeam(data.id).subscribe((team) => {
        this.team = team;
        this.participants = this.team.participants.split(',');
      });
    });
  }

  modifyTeam() {
    const participants = this.participants.join(',');
    this.teamsService.modifyTeam(this.team.name, participants).subscribe(
      () => {
        this.toastrService.success('Team successfully modified');
      },
      (err) => {
        this.toastrService.error('Error modifying team');
      }
    );
  }
}
