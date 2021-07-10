import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementMreze } from 'src/app/elementM/element-mreze';

@Injectable({
  providedIn: 'root'
})
export class ElementMrezeService {
  baseUrl = 'http://localhost:5000/api/elementmreze/';



  constructor(private httpClient: HttpClient) {}

  
  
  getAllElements() {
    return this.httpClient.get<ElementMreze[]>(this.baseUrl);
  }




}