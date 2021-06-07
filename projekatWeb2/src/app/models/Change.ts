import { WorkRequestStatusEnum } from '../enums/WorkRequestStatusEnum';

export interface Change {
  date: Date;
  status: WorkRequestStatusEnum;
}
