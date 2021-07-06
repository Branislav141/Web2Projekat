import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/Team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  baseUrl = 'http://localhost:5000/api/teams/';

  constructor(private httpClient: HttpClient) {}

  getTeams() {
    return this.httpClient.get<Team[]>(this.baseUrl);
  }

  getTeam(teamName: string) {
    return this.httpClient.get<Team>(this.baseUrl + teamName);
  }

  createTeam(name: string) {
    return this.httpClient.post(this.baseUrl, { name });
  }

  modifyTeam(teamName: string, participants: string) {
    return this.httpClient.post(this.baseUrl + 'modify', {
      name: teamName,
      participants,
    });
  }

  deleteTeam(teamName: string) {
    return this.httpClient.get(this.baseUrl + 'delete/' + teamName);
  }
}
