import { Injectable } from '@angular/core';
import { Incident } from 'src/app/incidenti/incident';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  baseUrl = 'http://localhost:5000/api/incidents/';



  constructor(private httpClient: HttpClient) {}

 
  
  getAllIncidents() {
    return this.httpClient.get<Incident[]>(this.baseUrl + 'all');
  }
}