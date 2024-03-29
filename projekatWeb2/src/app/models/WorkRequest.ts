export class WorkRequest {
  id: number;
  type: string;
  status: string;
  incident: number;
  street: string;
  startedTime: Date;
  finishedTime: Date;
  userCreated: string;
  purpose: string;
  notes: string;
  urgent: boolean;
  company: string;
  phoneNumber: string;
  equipment: string;
  creationDate: string;

  constructor() {
    this.id = 0;
    this.type = '';
    this.status = 'Draft';
    this.incident = 0;
    this.street = '';
    this.startedTime = new Date();
    this.finishedTime = new Date();
    this.userCreated = '';
    this.purpose = '';
    this.notes = '';
    this.urgent = false;
    this.company = '';
    this.phoneNumber = '';
    this.equipment = '';
    this.creationDate = '';
  }
}
