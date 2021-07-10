import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {MatSort} from '@angular/material/sort';
import { SafetyDocuments } from 'src/app/SafetyDoc/safety-documents';
import { SafetyDocumentsService } from 'src/app/services/SafetyD/safety-documents.service';





@Component({
  selector: 'app-safetydocuments',
  templateUrl: './safetydocuments.component.html',
  styleUrls: ['./safetydocuments.component.css'],
})
export class SafetydocumentsComponent implements OnInit,AfterViewInit {
  currentDocument = 'all';
    safetyDoc: SafetyDocuments[] = [];
    displayedColumns: string[] = ['id','Type','Plan','Status','CreatedBy','FiledCrew','Details','Notes','PhoneNo','CreationDate'];
    // @ts-ignore
    dataSource: MatTableDataSource<SafetyDocuments>;
  
    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(
      private authService: AuthService,
      private safetyDocService: SafetyDocumentsService,
      
    ) {
    }
  
    ngOnInit(): void {
      this.getAllDoc();
      
    }
  
    getAllDoc() {
      this.currentDocument = 'all';
      this.safetyDocService
        .getAllDocuments()
        .subscribe((data) => {
          this.safetyDoc = data;
          this.dataSource = new MatTableDataSource(data);
          this.ngAfterViewInit();
        });
    }
  
 
  
    ngAfterViewInit() {
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 1000);
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    
  
   
  
   
  }
  