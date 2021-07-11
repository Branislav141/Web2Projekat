export class Incident {
  id: number;
  type: string;
  priority:string;
  confirmed:boolean;
  status:string;
  eta:Date;
  description:string;
  ata:Date;
  outageTime:Date;
  etr:Date;
  affectedCustommers:number;
  calls:number;
  voltage:string;
  scheduledTime:Date;
  userCreated: string;



  constructor() {
    this.id = 0;
    this.type = '';
    this.priority='';
    this.confirmed=false;
    this.status='Draft';
    this.eta=new Date();
    this.description='';
    this.ata=new Date();
    this.outageTime=new Date();
    this.etr=new Date();
    this.affectedCustommers=0;
    this.calls=0;
    this.voltage='';
    this.scheduledTime=new Date();
    this.userCreated = '';

  
  }
}
