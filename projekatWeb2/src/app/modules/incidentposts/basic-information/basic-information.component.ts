import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Incident } from 'src/app/incidenti/incident';
import { IncidentToCreate } from 'src/app/incidenti/incident-to-create';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IncidentService } from 'src/app/services/incservice/incident.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css'],
})
export class BasicInformationComponent implements OnInit {
  incident: IncidentToCreate=new IncidentToCreate();
 
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private incService: IncidentService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {
   
  }
  



  addIncident() {
    
    this.incService.createNewIncident(this.incident).subscribe(
      () => {
        this.tostr.success('Incident created successfully!');
        this.router.navigate(['default/myIncidents']);
      },
      () => {
        this.tostr.error('There was an error creating incident');
      }
    );
  }

  


 
}
