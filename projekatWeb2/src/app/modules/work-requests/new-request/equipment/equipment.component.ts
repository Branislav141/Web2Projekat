import { Component, OnInit } from '@angular/core';
import { Element } from '../../../../models/Element';
import { ElementTypeEnum } from '../../../../enums/ElementTypeEnum';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  elements: Element[] = [];

  constructor() {}

  ngOnInit(): void {
    this.elements.push(
      {
        type: ElementTypeEnum.SWITCH,
        id: 0,
        name: 'SWI1',
        address: 'Novi Sad',
        coordinates: '0 0',
      },
      {
        type: ElementTypeEnum.FUSE,
        id: 1,
        name: 'FUS1',
        address: 'Novi Sad',
        coordinates: '10 10',
      }
    );
  }
}
