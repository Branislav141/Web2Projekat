import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkRequest } from '../../models/WorkRequest';
import { WorkRequestToCreate } from '../../models/WorkRequestToCreate';
import { Change } from '../../models/Change';
import { StatusToChange } from '../../models/StatusToChange';
import { EquipmentToAdd } from '../../models/EquipmentToAdd';

@Injectable({
  providedIn: 'root',
})
export class WorkRequstService {
  baseUrl = 'http://localhost:5000/api/workrequests/';

  constructor(private httpClient: HttpClient) {}

  getAllWorkRequestsForUser(email: string) {
    return this.httpClient.get<WorkRequest[]>(this.baseUrl + 'all/' + email);
  }

  getWorkRequest(id: string) {
    return this.httpClient.get<WorkRequest>(this.baseUrl + id);
  }

  getChangeHistory(id: string) {
    return this.httpClient.get<Change[]>(this.baseUrl + 'history/' + id);
  }

  createWorkRequest(workRequest: WorkRequestToCreate) {
    return this.httpClient.post(this.baseUrl, workRequest);
  }

  changeWorkRequestStatus(statusToChange: StatusToChange) {
    return this.httpClient.post(this.baseUrl + 'changeStatus/', statusToChange);
  }

  modifyWorkRequest(id: string, workRequest: WorkRequest) {
    return this.httpClient.post(this.baseUrl + 'modify/' + id, workRequest);
  }

  updateEquipment(equipmentToAdd: EquipmentToAdd) {
    return this.httpClient.post(this.baseUrl + 'equipment', equipmentToAdd);
  }
}
