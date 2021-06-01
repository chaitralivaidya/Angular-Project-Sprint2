import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../models/Policy';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-view-policy-admin',
  templateUrl: './view-policy-admin.component.html',
  styleUrls: ['./view-policy-admin.component.css']
})
export class ViewPolicyAdminComponent implements OnInit {

  policies: Policy[] = [];

  constructor(private router : Router, private policyService : PolicyService) { }

  ngOnInit(): void {

    if(localStorage.getItem("userName") !=null){								
     								
      this.policyService.getPolicies()								
        .subscribe(data=> {								
          this.policies = data;								
        });	
						
      }								
      else								
      this.router.navigate(['/login']);								
                      
    }	

    createClaim(policy:Policy){
      localStorage.setItem('policyNumber', policy.policyNumber.toString());
      this.router.navigate(['/createclaim']);
    }
}
