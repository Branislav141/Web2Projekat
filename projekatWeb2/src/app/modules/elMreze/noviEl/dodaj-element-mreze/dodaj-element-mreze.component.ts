import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ElementMrezeToAdd } from 'src/app/elementM/element-mreze-to-add';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ElementMrezeService } from 'src/app/services/elmentMSe/element-mreze.service';

@Component({
  selector: 'app-dodaj-element-mreze',
  templateUrl: './dodaj-element-mreze.component.html',
  styleUrls: ['./dodaj-element-mreze.component.css']
})
export class DodajElementMrezeComponent implements OnInit {
  element: ElementMrezeToAdd=new ElementMrezeToAdd();
  currentUser = '';
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private elemService: ElementMrezeService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUserEmail();
  }
  



  addElement() {
    this.element.userCreated = this.authService.getUserEmail();
    this.elemService.createNewElement(this.element).subscribe(
      () => {
        this.tostr.success('Element created successfully!');
        this.router.navigate(['default/elementiMreze']);
      },
      () => {
        this.tostr.error('There was an error creating element');
      }
    );
  }

  


 
}
