export class User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  birthday: Date;
  email: string;
  address: string;
  accountType: string;
  accountStatus: string;
  id?: string;

  constructor() {
    this.lastName = '';
    this.firstName = '';
    this.username = '';
    this.password = '';
    this.birthday = new Date();
    this.email = '';
    this.address = '';
    this.accountType = '';
    this.accountStatus = '';
    this.id = '';
  }
}
