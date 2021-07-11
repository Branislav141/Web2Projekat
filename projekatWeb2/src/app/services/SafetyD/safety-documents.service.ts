import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Changedoc } from 'src/app/models/changedoc';
import { Statustochangedoc } from 'src/app/models/statustochangedoc';
import { SafetyDocuments } from 'src/app/SafetyDoc/safety-documents';
import { SafetyDocumentsToCreate } from 'src/app/SafetyDoc/safety-documents-to-create';

@Injectable({
  providedIn: 'root'
})
export class SafetyDocumentsService {
  baseUrl = 'http://localhost:5000/api/safetydocuments/';



  constructor(private httpClient: HttpClient) {}

  getDocumentsForUser(email: string) {
    return this.httpClient.get<SafetyDocuments[]>(this.baseUrl + 'my/' + email);
  }
  
  getAllDocuments() {
    return this.httpClient.get<SafetyDocuments[]>(this.baseUrl);
  }

  
  createNewDocument(document: SafetyDocumentsToCreate) {
    return this.httpClient.post(this.baseUrl, document);
  }
  

  getSafeDoc(id: string) {
    return this.httpClient.get<SafetyDocuments>(this.baseUrl+ id);
  }

  modifySafDoc(id: string, document: SafetyDocuments) {
    return this.httpClient.post(this.baseUrl + 'modify/' + id, document);
  }

  getChangeHistory(id: string) {
    return this.httpClient.get<Changedoc[]>(this.baseUrl + 'history/' + id);
  }

  changeDocumentStatus(statusToChange: Statustochangedoc) {
    return this.httpClient.post(this.baseUrl + 'changeStatus/', statusToChange);
  }


}