import { AfterViewInit } from '@angular/core';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ElementMreze } from 'src/app/elementM/element-mreze';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ElementMrezeService } from 'src/app/services/elmentMSe/element-mreze.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';




@Component({
  selector: 'app-elementi-mreze',
  templateUrl: './elementi-mreze.component.html',
  styleUrls: ['./elementi-mreze.component.css']
})

export class ElementiMrezeComponent implements OnInit,AfterViewInit {
 
    currentElement = 'all';
    elementi: ElementMreze[] = [];
    displayedColumns: string[] = ['id','type','name','adress','coordinates'];
    // @ts-ignore
    dataSource: MatTableDataSource<ElementMreze>;
  
    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(
      private authService: AuthService,
      private elementService: ElementMrezeService,
      
    ) {
    }
  
    ngOnInit(): void {
      this.getAllElem();
      
    }
  
    getAllElem() {
      this.currentElement = 'all';
      this.elementService
        .getAllElements()
        .subscribe((data) => {
          this.elementi = data;
          this.dataSource = new MatTableDataSource(data);
          this.ngAfterViewInit();
        });
    }

    getMyElem() {
      this.currentElement = 'mine';
      this.elementService
        .getAllElementsForUser(this.authService.currentUser.email)
        .subscribe((data) => {
          this.elementi = data;
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
  