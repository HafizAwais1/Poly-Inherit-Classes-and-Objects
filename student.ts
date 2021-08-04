import { human } from "./human"; 
export class students extends human{
    color:string;
    language:string;

    constructor(hand:number,foot:number,color:string,language:string){
        super (hand,foot)
        this.color=color;
        this.language=language;

    }
    getStudentdetails(){
        return this.color+ " " + this.language + " " + this.gethumandetails();
    }
}