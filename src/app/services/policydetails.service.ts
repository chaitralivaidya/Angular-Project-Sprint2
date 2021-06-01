import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolicyDetails } from '../models/PolicyDetails';

@Injectable({
  providedIn: 'root'
})
export class PolicydetailsService {

  constructor(private http : HttpClient) { }
  policyDetailsUrl :string = 'http://localhost:3000/policydetails';	

  
  createPolicyDetails(policyDetail : PolicyDetails){
    console.log('\n\n')
    console.log('in service' )
    console.log(policyDetail)

    return this.http.post(this.policyDetailsUrl, policyDetail);
  }
}
