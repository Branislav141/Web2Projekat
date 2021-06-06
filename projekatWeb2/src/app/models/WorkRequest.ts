import { WorkRequestStatusEnum } from '../enums/WorkRequestStatusEnum';

export interface WorkRequest {
  id: number;
  start_date: Date;
  phone_number: string;
  status: WorkRequestStatusEnum;
  address: string;
}
