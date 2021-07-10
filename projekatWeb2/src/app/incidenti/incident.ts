export class Incident {
  id: number;
  Type: string;
  Priority:string;
  Confirmed:boolean;
  Status:string;
  ETA:Date;
  Description:string;
  ATA:Date;
  OutageTime:Date;
  ETR:Date;
  AffectedCustommers:number;
  Calls:number;
  Voltage:string;
  ScheduledTime:Date;



  constructor() {
    this.id = 0;
    this.Type = '';
    this.Priority='';
    this.Confirmed=false;
    this.Status='';
    this.ETA=new Date();
    this.Description='';
    this.ATA=new Date();
    this.OutageTime=new Date();
    this.ETR=new Date();
    this.AffectedCustommers=0;
    this.Calls=0;
    this.Voltage='';
    this.ScheduledTime=new Date();

  
  }
}
