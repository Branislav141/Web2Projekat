export class SafetyDocumentsToCreate {
   
    Type:string;
    Plan:string;
    Status:string;
    CreatedBy:string;
    FiledCrew:string;
    Details:string;
    Notes:string;
    PhoneNo:string;
    CreationDate:Date;

    constructor(){
   
        this.Type='';
        this.Plan='';
        this.Status='Draft';
        this.CreatedBy='';
        this.FiledCrew='';
        this.Details='';
        this.Notes='';
        this.PhoneNo='';
        this.CreationDate=new Date();
    }
}
