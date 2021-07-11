export class SafetyDocumentsToCreate {
   
    type:string;
    plan:string;
    
    createdBy:string;
    filedCrew:string;
    details:string;
    notes:string;
    phoneNo:string;
    creationDate:Date;

    constructor(){
   
        this.type='';
        this.plan='';
        
        this.createdBy='';
        this.filedCrew='';
        this.details='';
        this.notes='';
        this.phoneNo='';
        this.creationDate=new Date();
    }
}
