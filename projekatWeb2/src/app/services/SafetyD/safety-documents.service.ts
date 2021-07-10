import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SafetyDocuments } from 'src/app/SafetyDoc/safety-documents';

@Injectable({
  providedIn: 'root'
})
export class SafetyDocumentsService {
  baseUrl = 'http://localhost:5000/api/safetydocuments/';



  constructor(private httpClient: HttpClient) {}

  
  
  getAllDocuments() {
    return this.httpClient.get<SafetyDocuments[]>(this.baseUrl);
  }

  


}