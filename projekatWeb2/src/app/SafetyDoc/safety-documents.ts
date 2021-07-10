export class SafetyDocuments {
    id:number;
    Type:string;
    Plan:string;
    Status:boolean;
    CreatedBy:string;
    FiledCrew:string;
    Details:string;
    Notes:string;
    Phone:string;
    CreationDate:Date;

    constructor(){
        this.id=0;
        this.Type='';
        this.Plan='';
        this.Status=false;
        this.CreatedBy='';
        this.FiledCrew='';
        this.Details='';
        this.Notes='';
        this.Phone='';
        this.CreationDate=new Date();
    }
}
