import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {
  selected = 'option2';
  selected1 = 'option2';
  selected2 = 'option2';
  selected3 = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
