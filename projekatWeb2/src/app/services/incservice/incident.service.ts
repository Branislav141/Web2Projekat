import { Injectable } from '@angular/core';
import { Incident } from 'src/app/incidenti/incident';
import { HttpClient } from '@angular/common/http';
import { IncidentToCreate } from 'src/app/incidenti/incident-to-create';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  baseUrl = 'http://localhost:5000/api/incidents/';



  constructor(private httpClient: HttpClient) {}

  getAllIncidentsForUser(email: string) {
    return this.httpClient.get<Incident[]>(this.baseUrl + 'my/' + email);
  }
  
  getAllIncidents() {
    return this.httpClient.get<Incident[]>(this.baseUrl);
  }


  createNewIncident(incident: IncidentToCreate) {
    return this.httpClient.post(this.baseUrl, incident);
  }

  
  getIncidents(id: string) {
    return this.httpClient.get<Incident>(this.baseUrl+ id);
  }

  modifyIncident(id: string, incident: Incident) {
    return this.httpClient.post(this.baseUrl + 'modify/' + id, incident);
  }


 
  

  

  

  
}