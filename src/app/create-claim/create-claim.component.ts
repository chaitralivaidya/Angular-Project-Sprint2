import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimDetails } from '../models/ClaimDetails';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css'],
})
export class CreateClaimComponent implements OnInit {
  storedPolicyNumber :any = localStorage.getItem('policyNumber') || 0;
  
  disabled: boolean = true;

  claimForm: FormGroup;
  submitted : Boolean =false;
  invalidLogin: boolean = false;
  account: Account;
  claim : ClaimDetails;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private claimService: ClaimService
  ) {}

  onSubmit() {
    this.submitted = true;

    this.storedPolicyNumber = parseInt(this.storedPolicyNumber);
   this.claimService.getClaimByNumber(this.storedPolicyNumber).subscribe(data=>{
this.claim = data
    })


    if (this.claimForm.invalid) {

      return;
    } 
    else {
      if(localStorage.getItem("userName") !=null){

      if(this.claim != null){
      this.claimService.createClaim(this.claimForm.value).subscribe((data) => {
        
      });
      localStorage.setItem('claim', JSON.stringify(this.claimForm.value));
      this.router.navigate(['/questions'])
    }
    else{
      alert('Claim for policy number '+ this.storedPolicyNumber + 'already exists')
      this.router.navigate(['/users'])
    }
    }
    else{
      this.router.navigate(['/users']);
    }
  }
  }

  ngOnInit() {
    this.claimForm = this.formBuilder.group({
      claimReason: ['', Validators.required],
      claimTypeId: ['', Validators.required],
      accLocStreet: ['', Validators.required],
      accCity: ['', Validators.required],
      accState: ['', Validators.required],
      accZip: ['', Validators.required],
      claimNumber: ['', Validators.required],
      claimAmount: [''],
      id: [{ value: '' }, Validators.required],
    });
 

  }


  addClaim(claim : ClaimDetails){

    this.router.navigate(['/edit-user']);
  }
}
