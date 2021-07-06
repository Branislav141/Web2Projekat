export class WorkRequestToCreate {
  type: string;
  incident: number;
  street: string;
  startedTime: Date;
  finishedTime: Date;
  purpose: string;
  notes: string;
  urgent: boolean;
  company: string;
  phoneNumber: string;
  userCreated: string;

  constructor() {
    this.type = '';
    this.incident = 0;
    this.street = '';
    this.startedTime = new Date();
    this.finishedTime = new Date();
    this.purpose = '';
    this.notes = '';
    this.urgent = false;
    this.company = '';
    this.phoneNumber = '';
    this.userCreated = '';
  }
}
