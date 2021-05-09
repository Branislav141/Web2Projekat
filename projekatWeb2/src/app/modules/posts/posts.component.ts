import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  
  constructor() { }

  ngOnInit(): void {
  }

  
  

}
