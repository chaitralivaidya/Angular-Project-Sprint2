import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/Policy';
import { PolicyDetails } from '../models/PolicyDetails';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http : HttpClient) { }

  baseUrl:string = 'http://localhost:3000/policy';
	

  getPolicies(){
    return this.http.get<Policy[]>(this.baseUrl);
  }

  getPolicyByNumber(policyNumber : number){
    return this.http.get<Policy>(this.baseUrl + '/' + policyNumber);
  }

  createPolicy(policy :Policy){
    return this.http.post(this.baseUrl, policy);
  }

}
