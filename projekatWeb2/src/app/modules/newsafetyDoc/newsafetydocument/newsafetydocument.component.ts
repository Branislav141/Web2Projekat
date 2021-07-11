import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SafetyDocumentsToCreate } from 'src/app/SafetyDoc/safety-documents-to-create';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SafetyDocumentsService } from 'src/app/services/SafetyD/safety-documents.service';

@Component({
  selector: 'app-newsafetydocument',
  templateUrl: './newsafetydocument.component.html',
  styleUrls: ['./newsafetydocument.component.css']
})
export class NewsafetydocumentComponent implements OnInit {
  document: SafetyDocumentsToCreate=new SafetyDocumentsToCreate();
  currentUser = '';
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private documentService: SafetyDocumentsService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUserEmail();
  }
  



  addDocument() {
    this.document.CreatedBy = this.authService.getUserEmail();
    this.documentService.createNewDocument(this.document).subscribe(
      () => {
        this.tostr.success('Document created successfully!');
        this.router.navigate(['default/safety']);
      },
      () => {
        this.tostr.error('There was an error creating document');
      }
    );
  }

  


 
}


