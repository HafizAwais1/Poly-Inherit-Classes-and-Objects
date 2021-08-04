import { animal } from "./animals";
export class tiger extends animal{
    color:string;


    constructor(legs:number,eyes:string,color:string){
        super (legs,eyes );
        this.color=color;

    }
    Gettigerdetails(){
        return this.color+ " " + this.Getanimaldetails();
    }

}