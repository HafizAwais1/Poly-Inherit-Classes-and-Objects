export class animal{
    legs:number;
    eyes:string;
     
    constructor(legs:number,eyes:string){
        this.legs=legs;
        this.eyes=eyes;

    }
    Getanimaldetails(){
        return this.legs+ " " + this.eyes;
    }
}