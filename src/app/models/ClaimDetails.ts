import { Policy } from "./Policy";

export class ClaimDetails{

    claimNumber : number = 0;
    claimReason : number = 0;
    accidentLocStreet : number=0;
    accidentCity : string = "" ;
    accidentState : string="" ;
    accidentZip : number=0 ;
    policyNumber :  Policy ;
    claimTypeId : number=0 ;
    claimAmount : number=0 ;
}