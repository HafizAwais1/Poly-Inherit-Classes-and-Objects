export class human{
    hands:number;
    foot:number;


    constructor(hands:number,foot:number){
        this.hands=hands;
        this.foot=foot;

    }
    gethumandetails(){
        return this.hands + "  " + this.foot;
    }
}