import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkRequstService } from '../../../../services/work-requests/work-requst.service';
import { WorkRequest } from '../../../../models/WorkRequest';
import { EquipmentToAdd } from '../../../../models/EquipmentToAdd';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  allElements: string[] = [];
  workRequest: WorkRequest = new WorkRequest();
  elements: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private workRequestService: WorkRequstService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.allElements = this.getAllEquipment();
    this.getWorkRequest();
  }

  getWorkRequest() {
    this.activatedRoute.params.subscribe((data) => {
      this.workRequestService.getWorkRequest(data.id).subscribe((wr) => {
        this.workRequest = wr;
        this.elements = this.workRequest.equipment.split(',');
      });
    });
  }

  isChecked(element: string) {
    return this.elements.findIndex((x) => x === element) > -1;
  }

  addRemoveEquipment(checked: boolean, element: string) {
    if (checked) {
      this.elements.push(element);
    } else {
      this.elements = this.elements.filter((x) => x !== element);
    }
  }

  addEquipment() {
    const equipmentToAdd: EquipmentToAdd = {
      id: this.workRequest.id,
      equipment: this.elements.join(','),
    };
    this.workRequestService.updateEquipment(equipmentToAdd).subscribe(
      () => {
        this.toastrService.success('Team successfully modified');
      },
      (err) => {
        this.toastrService.error('Error modifying team');
      }
    );
  }

  getAllEquipment() {
    return ['Prekidac', 'Osigurac', 'Spojnica', 'Sklopka', 'Kabel'];
  }
}
