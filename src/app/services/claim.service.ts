import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaimDetails } from '../models/ClaimDetails';
import { ClaimTypes } from '../models/ClaimTypes';
import { Policy } from '../models/Policy';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http : HttpClient) { }

  baseUrl:string = 'http://localhost:3000/claim';		

  getClaimss(){
    return this.http.get<ClaimDetails[]>(this.baseUrl);
  }

  getClaimByNumber(claimNumber : number){
    return this.http.get<ClaimDetails>(this.baseUrl + '/' + claimNumber);
  }

  createClaim(claim :ClaimDetails){
    return this.http.post(this.baseUrl, claim);
  }

  getClaimTypes(){
    return this.http.get<ClaimTypes>('http://localhost:3000/claimtypes')
  }

  updateClaim(claim :ClaimDetails, policyNumber: number){
    console.log(claim)
    return this.http.patch(this.baseUrl + '/' + policyNumber, claim);
  }
}
