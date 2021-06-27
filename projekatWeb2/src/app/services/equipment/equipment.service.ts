import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../../models/Equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  baseUrl = 'http://localhost:5000/api/equipment/';

  constructor(private httpClient: HttpClient) {}

  getEquipment() {
    return this.httpClient.get<Equipment[]>(this.baseUrl);
  }

  addEquipment(name: string) {
    return this.httpClient.post(this.baseUrl, { name });
  }
}
