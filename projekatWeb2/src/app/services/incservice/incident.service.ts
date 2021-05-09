import { Injectable } from '@angular/core';
import { Incident } from 'src/app/incidenti/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor() { }

  loadIncidents() {
    console.log('Ucitavanje incidenata...');
    return this.mockedIncidents();
  }

  mockedIncidents(): Array<Incident> {
    let allIncidents=new Array<Incident>();

    const c1 = new Incident(
     200,
      'aaa',
      'bbb',
      'ccc',
      'ddd'
      
    );
    const c2 = new Incident(
      200,
       'pera',
       'zika',
       'laza',
       'ddd'
       
     );
     const c3 = new Incident(
      200,
       'pera',
       'zika',
       'laza',
       'ddd'
       
     );
     const c4 = new Incident(
      200,
       'pera',
       'zika',
       'laza',
       'ddd'
       
     );
     const c5 = new Incident(
      200,
       'pera',
       'zika',
       'laza',
       'ddd'
       
     );
     const c6 = new Incident(
      500,
       'pera',
       'zika',
       'laza',
       'ddd'
       
     );
     const c7 = new Incident(
      400,
       'pera',
       'zika',
       'laza',
       'ddd'
       
     );

    allIncidents.push(c1);
    allIncidents.push(c2);
    allIncidents.push(c3);
    allIncidents.push(c4);
    allIncidents.push(c5);
    allIncidents.push(c6);
    allIncidents.push(c7);
    return allIncidents;

  

  }

}
