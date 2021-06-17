import { AccountStatusEnum } from '../enums/AccountStatusEnum';

export interface User {
  first_name?: string;
  last_name?: string;
  birthday?: Date;
  email?: string;
  account_status?: AccountStatusEnum;
}
