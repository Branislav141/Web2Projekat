export class SafetyDocuments {
    id:number;
    type:string;
    plan:string;
    status:string;
    createdBy:string;
    filedCrew:string;
    details:string;
    notes:string;
    phoneNo:string;
    creationDate:Date;

    constructor(){
        this.id=0;
        this.type='';
        this.plan='';
        this.status='Draft';
        this.createdBy='';
        this.filedCrew='';
        this.details='';
        this.notes='';
        this.phoneNo='';
        this.creationDate=new Date();
    }
}
