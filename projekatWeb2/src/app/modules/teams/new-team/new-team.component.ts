import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../services/teams/teams.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css'],
})
export class NewTeamComponent implements OnInit {
  name = '';

  constructor(
    private teamsService: TeamsService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addTeam() {
    if (this.name.length === 0) {
      this.toastrService.error('You must enter the name');
    }

    this.teamsService.createTeam(this.name).subscribe(
      () => {
        this.toastrService.success('Team created successfully!');
        this.router.navigate(['/default/teams']);
      },
      (err) => {
        this.toastrService.error('Team with such name already exists');
      }
    );
  }
}
