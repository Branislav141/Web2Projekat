import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementMreze } from 'src/app/elementM/element-mreze';
import { ElementMrezeToAdd } from 'src/app/elementM/element-mreze-to-add';

@Injectable({
  providedIn: 'root'
})
export class ElementMrezeService {
  baseUrl = 'http://localhost:5000/api/elementmreze/';



  constructor(private httpClient: HttpClient) {}

  
  
  getAllElements() {
    return this.httpClient.get<ElementMreze[]>(this.baseUrl);
  }

  createNewElement(element: ElementMrezeToAdd) {
    return this.httpClient.post(this.baseUrl, element);
  }



}