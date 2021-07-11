import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SafetyDocuments } from 'src/app/SafetyDoc/safety-documents';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SafetyDocumentsService } from 'src/app/services/SafetyD/safety-documents.service';

@Component({
  selector: 'app-bscinformation',
  templateUrl: './bscinformation.component.html',
  styleUrls: ['./bscinformation.component.css'],
})
export class BscinformationComponent implements OnInit {
  document: SafetyDocuments = new SafetyDocuments();

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private safeDocService: SafetyDocumentsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.loadSafeD(data.id);
    });
  }

  loadSafeD(id: string) {
    this.safeDocService.getSafeDoc(id).subscribe((data) => {
      this.document = data;
    });
  }

  modifyDoc() {
    this.safeDocService
      .modifySafDoc(this.document.id.toString(), this.document)
      .subscribe(
        () => {
          this.toastrService.success('Document successfully modified');
        },
        () => {
          this.toastrService.error('There was an error modifying document');
        }
      );
  }

}