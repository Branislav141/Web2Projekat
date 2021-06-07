import { ElementTypeEnum } from '../enums/ElementTypeEnum';

export interface Element {
  type: ElementTypeEnum;
  id: number;
  name: string;
  address: string;
  coordinates: string;
}
