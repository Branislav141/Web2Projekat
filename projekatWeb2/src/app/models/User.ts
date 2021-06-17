import { AccountStatusEnum } from '../enums/AccountStatusEnum';
import { AccountTypeEnum } from '../enums/AccountTypeEnum';

export interface User {
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  birthday?: Date;
  email?: string;
  address?: string;
  account_type?: AccountTypeEnum;
  account_status?: AccountStatusEnum;
}
